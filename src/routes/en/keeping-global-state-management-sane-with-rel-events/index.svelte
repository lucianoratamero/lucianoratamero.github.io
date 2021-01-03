<script lang="ts">
  import Highlight from "../../../components/Highlight.svelte";
  import { javascript } from "svelte-highlight/languages";
  import { formatCodeString } from "../../../utils";
  import cover from "../../../img/mantendo-o-estado-global-de-uma-maneira-sa-com-rel-events/cover.png";
  import image1 from "../../../img/mantendo-o-estado-global-de-uma-maneira-sa-com-rel-events/1-imaginary-event.png";
  import image2 from "../../../img/mantendo-o-estado-global-de-uma-maneira-sa-com-rel-events/2-basic-http-event.png";
  import image3 from "../../../img/mantendo-o-estado-global-de-uma-maneira-sa-com-rel-events/3-login-event-manager.png";
  import image4 from "../../../img/mantendo-o-estado-global-de-uma-maneira-sa-com-rel-events/4-registering-component.png";
</script>

<svelte:head>
  <title>
    Keeping global state management sane with rel-events - luciano@ratamero.com
  </title>
  <meta
    name="description"
    content="In this post, we'll discuss how to use rel-events to keep your React app's state sane :]" />
  <meta
    name="keywords"
    content="Luciano Ratamero, rel-events, react, redux, big projects, architecture, planning, frontend, javascript, frameworks" />
</svelte:head>

<h1><mark>Keeping global state management sane with rel-events</mark></h1>

<p class="meta">2019-10-19</p>
<figure><img src={cover} alt="Logos from React and Redux" /></figure>
<p>
  Maintaining a big and complex react app is not for amateurs. Whatever you may
  choose to manage your app state, chances are that it's hard to pick up, like
  redux, or really convoluted, like making yourself a service layer. With the
  goal of making it easy for new developers to jump into our projects, we at
  Labcodes decided it was time to give this problem a little more thought. Our
  answer was
  <a href="https://github.com/labcodes/rel-events">rel-events</a>.
</p>
<h2>Why another library to manage states?</h2>
<p>
  <a href="https://xkcd.com/927/"><img
      src="https://imgs.xkcd.com/comics/standards.png"
      alt="xkcd is always right" /></a>
</p>
<p>
  Whenever I think of making something new and shiny, this xkcd strip comes to
  haunt me. Believe me, I don't want to be the kind of person that does
  everything themselves, and that's one of my grievances with the fork
  mentality. However, it was about time I did something to address a pesky
  problem I deal with daily: using whatever library to separate business logic
  from react components.
</p>
<p>
  At the end of the day, after much thought, I always end up surrendering and
  running
  <code>npm install redux react-redux --save</code>. I even shared my basic
  tools to deal with redux on our
  <a
    href="https://github.com/labcodes/react-redux-api-tools/"><code>react-redux-api-tools</code></a>
  package.
</p>
<p>
  And by no means I hate redux; in fact, I love it. It gets the job done, it's
  ultra flexible, with low side effects. But let's be frank here: the discomfort
  of reading
  <code>mapStateToProps</code>
  for the first time is
  <strong>real</strong>. It took me a long while to properly understand what was
  going on. Then there are actions, action creators, reducers, dispatches and
  middlewares, and sagas, and async dispatches; it's neverending.
</p>
<p>
  After those confusing and long first months, things started to get easier, but
  way,
  <strong>way</strong>
  too verbose. I always thought that redux felt a lower level tool, and that I
  was always in need of specifying, step by step, exactly and strictly what and
  how things should be done. No abstraction at all. A lot of copy and paste,
  though.
</p>
<p>
  I came to the conclusion that it would be nice to have all the features I
  would like in my redux configuration - a proper HTTP request flow, less
  repetition, meaningful connection between actions and reducers -, without
  sacrificing anything. I got the green light to develop internally a solution
  for that:
  <code>rel-events</code>.
</p>
<h2>Cool, but what's <code>rel-events</code>?</h2>
<p>
  <code>rel-events</code>
  is a React Events Library that takes the concept of events, present in redux,
  to a higher level of abstraction. It's a thin layer over redux that enables
  you to stop thinking about actions, reducers, stores and middlewares, so you
  can focus on what needs to be done: executing domain logic reactively when
  events pop up.
</p>
<p>
  To do that, let's imagine a simple scenario: we need to enable a user to log
  into our app.
</p>
<p>
  You could do the whole request flow inside your components, but
  <a
    href="https://labcodes.com.br/blog/en/decoupling-logic-from-react-components.html">as
    we stated on our previous blog post</a>, we don't really recommend doing
  that - it always ends up messy. We could use redux, but then our junior
  developers would need to pass that
  <code>mapStateToProps</code>
  hurdle, and sometimes we don't have the luxury of taking our time. We could
  use sagas, but then redux is back with a vengeance.
</p>
<p>
  Now, forget about actions and reducers and imagine we have an object called
  LoginEvent. Whenever we call it passing an email and password, things get done
  and data comes through to the component. Imagine you don't need to know
  anything but its name. No reducers, no actions, no
  <code>connect</code>
  or
  <code>mapStateToProps</code>. It would be something like this:
</p>
<Highlight
  language={javascript}
  code={formatCodeString(`
import { HTTPEvent } from "rel-events";

export const LoginEvent = new HTTPEvent({ name: "login" });
`)} />
<p>
  Cool, but what about the whole behavior? Where's the logic to make the
  request? How to deal with bad requests? Let's say, besides the Event, we have
  something that manages the event flow, an Event Manager:
</p>
<Highlight
  language={javascript}
  code={formatCodeString(`
import { HTTPEvent } from "rel-events";
import { LoginEventManager } from "./eventManagers";

export const LoginEvent = new HTTPEvent({
  name: "login",
  manager: new LoginEventManager(),
});
`)} />
<p>
  That's better. But how is this manager implemented? Because, if it needs to
  deal with the event flow, it needs to do a lot of stuff: know how to make the
  request and what to do when the request succeeds or fails. Oh, and we need an
  intermediary state, because we love loading spinners! Hell, I forgot about the
  inital state of the event as well! Ok, ok, let's see:
</p>
<Highlight
  language={javascript}
  code={formatCodeString(`
import { fetchFromApi } from "rel-events";

export class LoginEventManager {
  initialState = { isLoading: false, username: "Anonymous" };

  call = (user) => {
    return () => fetchFromApi(
      "/api/login",
      { method: "POST", body: JSON.stringify(user) }
    );
  }

  onDispatch = (state, event) => ({
    ...state,
    isLoading: true,
    username: this.initialState.username
  })

  onSuccess = (state, event) => ({
    ...state,
    isLoading: this.initialState.isLoading,
    username: event.response.data.username
  })

  onFailure = (state, event) => ({
    ...state,
    isLoading: this.initialState.isLoading,
    username: this.initialState.username,
    error: event.error.data
  })
});
`)} />
<p>
  That's about it, right? But, hey, how do we trigger it? And how do I make the
  Event register which Components are able to trigger it? How does the component
  get the data from it? We're almost there:
</p>
<Highlight
  language={javascript}
  code={formatCodeString(`
// LoginComponent.js
import React from "react";
import { LoginEvent } from "./events";

export class LoginComponent extends React.Component {
  handleSubmit = () => {
    const { user } = this.state;
    // the Event injects its trigger as a prop with its own name ("login")
    const { login } = this.props;

    login(user);
  }

  render() {
    const { username } = this.props;
    return (
      <React.Fragment>
        <h1>Hello, {username}</h1>
        <form>{ /* inputs and submit button */ }</form>
      </React.Fragment>
    );
  }
});

// and here, we register the Component in the Event,
// which injects its trigger as props (as described above),
// and we also ask for the Events "username" value to be injected as well
export default LoginEvent.register({
  Component: LoginComponent,
  props: ["username"]
});
`)} />
<p>
  And that's exactly the current API for a HTTPEvent from
  <code>rel-events</code>. No actions, no reducers, no coupling between the
  logic and the component layers, nothing. Of course, it needs some
  configuration to hook it up with redux, but it's mostly a one time setup, very
  well documented
  <a href="https://github.com/labcodes/rel-events/tree/master/docs">in our docs</a>.
</p>
<h2>That sounds... nice! But what about features? I want features!</h2>
<p>
  With our current beta version (0.1.3 as of September 2019), you're able to:
</p>
<ul>
  <li>
    use a basic Event type (for the times you don't need to make HTTP requests);
  </li>
  <li>
    chain Events/HTTPEvents (useful for fetching more data when a request is
    done);
  </li>
  <li>
    have multiple Events registering to the same Component (you'll probably have
    a Component that needs to listen to multiple Events);
  </li>
  <li>
    execute code after dispatching an Event (with
    <code>afterDispatch</code>);
  </li>
  <li>
    execute code after a request is successful (with
    <code>afterSuccess</code>);
  </li>
  <li>
    execute code after a request has failed (with
    <code>afterFailure</code>);
  </li>
  <li>
    evaluate if an event should be dispatched or not (with the
    <code>shouldDispatch</code>
    method).
  </li>
</ul>
<p>
  And more! All that without the cognitive burden, the crazy constants, the
  store names and all the bad developer experience from redux. The best part: no
  huge learning curve. This post has basically all you need to know to use our
  lib. Really.
</p>
<p>
  So if you liked it,
  <a href="https://github.com/labcodes/rel-events">take a look at our github
    repo</a>
  to get started and share the love! Thanks for your attention, and see you next
  time!
</p>

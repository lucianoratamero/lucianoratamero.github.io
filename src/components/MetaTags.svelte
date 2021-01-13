<script>
  export let title;
  export let description;
  export let keywords;
  export let image = "https://www.ratamero.com/default-media-share.jpg";
</script>

<title>{title} - luciano@ratamero.com</title>
<meta name="description" content={description} />
<meta name="keywords" content="Luciano Ratamero, {keywords}" />

<meta property="og:title" content="{title} - luciano@ratamero.com" />
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />
<meta property="og:url" content="https://www.ratamero.com" />

<meta name="twitter:title" content="{title} - luciano@ratamero.com" />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={image} />
<meta name="twitter:card" content="summary_large_image" />

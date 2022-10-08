<script setup>
// import endpoint from 'bonn/vercel/endpoint'

// const sampleOptions = {
//   callback: () => {}
// }
</script>

<template>
  <VercelPage
    name="endpoint"
    args="options"
    args-sample="options"
  >
    <HighlightedPre
      file="api/my-endpoint.js"
      :code="`import endpoint from 'bonn/vercel/endpoint'

export default endpoint(({
  query,
  method
}) => {
  return {
    status: 200,
    body: {
      foobar: method === 'post' ? 'foo' : 'bar'
    }
  }
})`"
    />

    <Bodytext>
      <p>Create a Vercel endpoint in the <code>api/</code> directory. Parses the request query and headers to make writing the callback easier.</p>

      <p>Arguments passed to callback:</p>
    </Bodytext>

    <Dump
      :data="`{

    }`"
    />

    <Bodytext>
      <p>The callback should return an object with a body and optionally contentType and status.</p>
    </Bodytext>
  </VercelPage>
</template>

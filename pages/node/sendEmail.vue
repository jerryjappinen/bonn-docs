<script setup>
const codeSample = `sendEmail(nodemailerEmailService, {
  from,
  to,
  cc,
  bcc,
  subject,
  text,
  html,
  attachments,

  // Advanced
  sender,
  replyTo,
  inReplyTo,
  messageId,
  references,
  headers
})`
</script>

<template>
  <NodePage
    name="sendEmail"
    :args="['nodemailerEmailService', 'data']"
  >
    <HighlightedPre :code="codeSample" />
  </NodePage>
</template>

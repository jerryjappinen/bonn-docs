// Vidya list
import endpoint from 'bonn/vercel/endpoint'

import fetchPrivateGoogleSheet from 'bonn/util/fetchPrivateGoogleSheet'
// import fetchPublicGoogleSheet from 'bonn/util/fetchPublicGoogleSheet'

// This is the public ID seen in URL bar
// const googleSheetId = '1oLyoA5QO6JkrKse1SQpyDhHhn57t6IDwbbIPR7GUH2E'

// This is the link you get from the share dialog
const privateShareId = '2PACX-1vTjAHUYwEwoacVKyqRhNrdzC1d_jw5T5gRzhWOb3urEPf4Nc8gFM67AyZJVQLKbraRXflT-yzQcPGCF'

export default endpoint(() => {
  // return fetchPublicGoogleSheet(googleSheetId, true)
  return fetchPrivateGoogleSheet(privateShareId, true)
})

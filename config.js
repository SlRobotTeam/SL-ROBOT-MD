const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb://utjaop1dhaw2u436zwkm:ID7a74JFWha1ijLmN7iQ@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bbtkq1sm2exv2vh?replicaSet=rs0"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/SamPandey001/Secktor-Md'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '919628516236'
global.devs = '94786802371';
global.website = 'https://github.com/SamPandey001/Secktor-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  botname: process.env.BOT_NAME || '𝐒𝐞𝐜𝐤𝐭𝐨𝐫 𝐁𝐨𝐭𝐭𝐨',
  ownername:process.env.OWNER_NAME || 'SamPandey001',
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZpa0xaallWbUNoYWJ0Y1lCMGZ6T2M4MGJqY3pSMlk0bkN0ZlRmT04wUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVVVdCtzUndERUxSNmEyZjR0MUoxQ0pTR0NFaFVjYmx0N3hFd2UzSTJTaz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPS3hmeTBDYzFyUGxnelhwZ0lZYkFTUzJRd29sNk0rVjRaNlk4aUVGSjBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJURWE0T0gwakh2Mi9zaWdoQkdYTDAyQjRzOXBJUWhEVm1TS1g5VHUwMUhzPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBQjA1c2tzeE0veHhqU2FKTFg4Q1doOW1WVXJpaDRpMS81RlQyYWZCblk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitLcy9zaDlvUlAwdkp6T3BjUklWTnlpRmtva20zNkp6SnIvQitxVGNnd2s9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlcloyTlplaG9WemhUZEFSWnJPMExBSVZZelo2NU15MVZYd0lVdmtGeWlFd0pyaWo3UmVIN1RVQlB0UzlSQXIveGRORm5aek5IZzR3MVRjbzhUSy9EQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI1MCwiYWR2U2VjcmV0S2V5IjoiaWpXSC9GMTBGK0N4VDJYZzZtM29rSnR6NXlSdkVoVUtMKzk4UDNtMkx6OD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFRmejQwQkVJU28xNklHR0FVPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJldU9PcDR2eHJWUGxlRlhOZnZwUWxqY20rSU9VS3FBajNWTUpwYVRZQUI0PSIsImFjY291bnRTaWduYXR1cmUiOiI1bVBwZ05RSVFwT0VhS3QrYkFYM2lFQXY5eHNITy8vUHVZVzZxTUt0MWd3bGJCckNXTGQyVlI0MWhNcHI1dUx5WURMeEVwSUplL09XRFhPRER0NnlCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicnFFajlIem1FdFJEYmtuY2xpeGh3cnN4TVRBaWs5S3ZMMHR6S0VJbnhpNUlZd3A3MURVYnhRdmY4MXU2RDdlRkRPc3RSaDdmNXQ2TGNNa0JvbzVKQnc9PSJ9LCJtZSI6eyJpZCI6IjQ0NzQ0MTQzOTc5Mzo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNZQkVSIFlBS1VaQSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0NDc0NDE0Mzk3OTM6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYcmpqcWVMOGExVDVYaFZ6WDc2VUpZM0p2aURsQ3FnSTkxVENhV2syQUFlIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjgzMzQ2NDM4fQ==',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || false,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'OPENAI_KEY',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})

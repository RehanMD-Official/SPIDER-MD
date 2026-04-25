const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With SPIDER-MD Hear
SESSION_ID: process.env.SESSION_ID || "SPIDER-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUxuMkZ5ZXVoRURKUkVBK0gwNnYrUjUxUS9lQVhXZ1JPc3Rab29renQycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkE1OG9LNFFaOWJKSGZZQXNZS0NVL1hNbjk3T1AzdWMrSXd2MWJNYVlqWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSDIvS2VzTU9IRDZ4aU5nQ1VNSUY3bHRZME9pcjhFZEdBcTkweWlkckU0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJucnFOZWxzaVJNY2ZpRHpudW9mNXVwVCtKcW5Qend6Vld1Z3ZrUHFwL2lFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFHcXZQd05rYmp0RlJwempHd21EZ013c0lsWnJGRW9ocEtKRVVTTlprSGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlYzcXVMaXp3b2JoQ3JVUlhNNkpBNFNRUlF6b1liVTF6R1NBbnhKZFFMRkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUtGUzBRNE5wRE9GT0ZnS1ovUFdacUJZbVZ4TzZucHdjVVRWbEZkVFNVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXNvNkxkcXNnMEVxTkJvUVZsV3djZURMczcvUzZ0Q2VuYllteW0xbTgycz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlHNDgwQjNIOFFGSkVuZjd3R0tKOHQrTG5jTHlXayttN2lGWk5KaGZYZ2N0dHBzTTVUSDlrSTkwMXNsaWpvQm5jOVNITThUb3NYbFBIUGpEZFpHTkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE3LCJhZHZTZWNyZXRLZXkiOiJvMzU2YnpFK1ZONDlQQlVGdUhqMXlzeHUyZU95bWJPYUhMQmRsUEZrV1k0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjJaUDlUVDlFIiwibWUiOnsiaWQiOiI5MjMyMDcwNDczNjY6MjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2bheKEmMSx1p/hjZ3divCdm5vwnZuGzL3JvM+7zZzNofCdm4LGnsy9IiwibGlkIjoiMzQ5MTQ0NDM0NjA4NjM6MjdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQejZqTm9FRUlPVXNzOEdHQndnQVNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKVFpBL01CZHN2K3duRktybUpZRGdyRW9NM0RJSVp1Rk83K2FFZFQ0b0I0PSIsImFjY291bnRTaWduYXR1cmUiOiJyUUVvQTZFc2ZuTzBTSXpFdGVNTzZDYmd4ZlVEYkpRWCsvOTA4UkN1bnJrUXBVbHRMK1ZDNnJwTUZIMDZXRUFQTEZLU2VVYXJvMExvc1BERHFlbFJCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY3hGaEtScnBnZlF2d2RPTGdqbTlseTFEODJ1Nk9Tb09nVUpiWHhzTFByUU4zQXBNdTJqQktlY1FEa1NRYmo0ZWVER2VnUWQwK2x1ZlN2clJWVUZVQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIzNDkxNDQ0MzQ2MDg2MzoyN0BsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU1UyUVB6QVhiTC9zSnhTcTVpV0E0S3hLRE53eUNHYmhUdS9taEhVK0tBZSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzSUVnZ0MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzc3MTA5NTEzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVHeCJ9ZqTm9FRUlPVXNzOEdHQndnQVNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKVFpBL01CZHN2K3duRktybUpZRGdyRW9NM0RJSVp1Rk83K2FFZFQ0b0I0PSIsImFjY291bnRTaWduYXR1cmUiOiJyUUVvQTZFc2ZuTzBTSXpFdGVNTzZDYmd4ZlVEYkpRWCsvOTA4UkN1bnJrUXBVbHRMK1ZDNnJwTUZIMDZXRUFQTEZLU2VVYXJvMExvc1BERHFlbFJCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY3hGaEtScnBnZlF2d2RPTGdqbTlseTFEODJ1Nk9Tb09nVUpiWHhzTFByUU4zQXBNdTJqQktlY1FEa1NRYmo0ZWVER2VnUWQwK2x1ZlN2clJWVUZVQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIzNDkxNDQ0MzQ2MDg2MzoyN0BsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU1UyUVB6QVhiTC9zSnhTcTVpV0E0S3hLRE53eUNHYmhUdS9taEhVK0tBZSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzSUVnZ0MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzc3MTA5NTEzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVHeCJ9",
// SPIDER MD Api Site Url
API_BASE: process.env.API_BASE || "https://arslan-apis.vercel.app/",
// SPIDER MD Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "rehanmdofficialadmin",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SPIDER-MD 🤍*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SPIDER-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SPIDER-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923207047366",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "RehanMD-Official",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};








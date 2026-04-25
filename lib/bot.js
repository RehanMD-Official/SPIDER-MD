const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://github.com/RehanMD-Official/SPIDER-MD/refs/heads/main/datafile.json",
AUTO_SITE: process.env.AUTO_SITE || "https://arslan-apis.vercel.app",
BAND_URL: process.env.BAND_URL || "https://github.com/RehanMD-Official/SPIDER-MD/refs/heads/main/bandusers.json",
REPO_LINK: process.env.REPO_LINK || "https://github.com/RehanMD-Official/SPIDER-MD",
REPO_NAME: process.env.REPO_NAME || "SPIDER-MD",
BOT_NAME: process.env.BOT_NAME || "SPIDER-MD",
DESCRIPTION: process.env.DESCRIPTION || "SPIDER MD PAKISTANI POWERFULL WHATSAPP BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "923207047366",
OWNER_NAME: process.env.OWNER_NAME || "RehanMD Official",
ST_SAVE: process.env.ST_SAVE || "SPIDER-MD-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "SPIDER-MD-BY-REHANMD-OFFICIAL",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`STATUS SEEN BY SPIDER-MD`* _*POWERD BY*_ *RehanMD Official Whtsapp Bot*",
FOOTER: process.env.FOOTER || "SPIDER-MD",
COPYRIGHT: process.env.COPYRIGHT || "*㋛ SPIDER-MD BY REHAN-MD OFFICIAL*",
VERSION: process.env.VERSION || "9.0.0",
NEWSLETTER: process.env.NEWSLETTER || "120363427371098494@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029VbBySBK4Spk7hNAnHU3C",
INSTA: process.env.INSTA || "https://www.instagram.com/itxmian890_?igsh=azE2a3l3YzR5OGZ0",
ALIVE_IMG: process.env.ALIVE_IMG || "https://ibb.co/67Q2HCxq",
OWNER_IMG: process.env.OWNER_IMG || "https://ibb.co/67Q2HCxq",
CONVERT_IMG: process.env.CONVERT_IMG || "https://ibb.co/67Q2HCxq",
AI_IMG: process.env.AI_IMG || "https://ibb.co/67Q2HCxq",
SEARCH_IMG: process.env.SEARCH_IMG || "https://n.uguu.se/BlGoHUJU.jpg",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://n.uguu.se/BlGoHUJU.jpg",
MAIN_IMG: process.env.MAIN_IMG || "https://i.ibb.co/s9Cr1VSX/file-000000006d207207b33a182396f1a27f.png",
GROUP_IMG: process.env.GROUP_IMG || "https://ibb.co/67Q2HCxq",
FUN_IMG: process.env.FUN_IMG || "https://ibb.co/67Q2HCxq",
TOOLS_IMG: process.env.TOOLS_IMG || "https://ibb.co/67Q2HCxq",
OTHER_IMG: process.env.OTHER_IMG || "https://ibb.co/67Q2HCxq",
MOVIE_IMG: process.env.MOVIE_IMG || "https://ibb.co/67Q2HCxq",
NEWS_IMG: process.env.NEWS_IMG || "https://ibb.co/67Q2HCxq",
PP_IMG: process.env.PP_IMG || "https://ibb.co/67Q2HCxq"
};

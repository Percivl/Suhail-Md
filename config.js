const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_37_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIyLFxuICAgICAgICA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDYyLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMyxcbiAgICAgICAgMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwLFxuICAgICAgICA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5LFxuICAgICAgICAyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUyLFxuICAgICAgICA0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1LFxuICAgICAgICA1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NixcbiAgICAgICAgMjI4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc0LFxuICAgICAgICA1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDM5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDczLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDYzLFxuICAgICAgICA5MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQzLFxuICAgICAgICA1NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaUZ5cW52c3h0RExSQ0FoUUlMSTNBUjJ1U1NFMFFIWGVjeE9DYk1qWmkrQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUDlET3ZrRk9SdTZBQ1phbFR0U2k0QVwiLFxuICBcInBob25lSWRcIjogXCJiYjk2ZDQyOC01OTFmLTQzOGYtODRmMi0wM2UwMDVlOTc5NTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTExLFxuICAgICAgMjEzLFxuICAgICAgMTIyLFxuICAgICAgMTcyLFxuICAgICAgMTA4LFxuICAgICAgMjgsXG4gICAgICAxMTEsXG4gICAgICAxMzAsXG4gICAgICAyMDQsXG4gICAgICA0OSxcbiAgICAgIDg0LFxuICAgICAgMjQ0LFxuICAgICAgMTkyLFxuICAgICAgMTU0LFxuICAgICAgMTM3LFxuICAgICAgMTY0LFxuICAgICAgMTc4LFxuICAgICAgMTg0LFxuICAgICAgMTA4LFxuICAgICAgMTIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDEyNixcbiAgICAgIDEwNixcbiAgICAgIDE3OCxcbiAgICAgIDQ4LFxuICAgICAgMjIxLFxuICAgICAgMTY4LFxuICAgICAgMTg1LFxuICAgICAgMjU0LFxuICAgICAgMjM3LFxuICAgICAgMTIwLFxuICAgICAgMTg1LFxuICAgICAgMjM5LFxuICAgICAgMzQsXG4gICAgICAyNDYsXG4gICAgICA5OCxcbiAgICAgIDIzNyxcbiAgICAgIDExMixcbiAgICAgIDE5NSxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZSEJUUFpNVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIzNjk2NDEwNjU6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NDg0NjU5MDE4MTUyNDoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKMlZscGtCRUlHYXZMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlB1ckN5eHNxdzhkbEhmNXdoRWVRbjVQZk1TUk5QdXEwZy9YVXBjK1FpaVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS0tJMk5lSUxoL3BUVlRiRVduYkVBd0d0RTcxTWFHR3ZoTEgrMGwrMDB0WWVlcEZmMm91L3F5ZmdyT1NWU21wRmdialNFVCtSbG92bFJMZU5nRlJ2Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaCs4MytqNDZ6cVc2RytDWlRLci9uaVNHNk12ZjFmQXEyYmJ0aEtDMzdMdmxoRDZOTE5raUVtSWpOMlg4enVlU2Rrc3pCWXIyOGk1RC9meUZXLzdaaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIzNjk2NDEwNjU6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDY1MTAxMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "'",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

# KJP API Relay
----
This is a Node.js based relay server for Key Jay Productions. Helps with distributing API Token based access to the Key Jay Productions API.

## Notes before start
- Make sure to view the environment example file to know what keys to add
- A deployment script exists on the home server to assist with updates, as well as manage the server service handler aka PM2. If the server does not start, make sure the service is running using *pm2 status* and *systemctl status pm2-[user].service*

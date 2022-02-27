#!/bin/sh
/bin/sh -ec 'cd api && npm install && npm start &'
/bin/sh -ec 'cd client && npm install && npm start'
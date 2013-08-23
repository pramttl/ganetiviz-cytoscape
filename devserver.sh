#!/bin/bash
#
# A very-simple webserver for developing code locally. (Just like the manage.py runserver in Django)
#
# usage:
#   ./devserver <port-number>

cd `dirname $0`/

# use default port if called without args
PORT=2600 
if [[ $1 =~ ^[0-9]+$ ]]
  then PORT=$1
fi

echo "Starting local http server in current directory (ctrl-c to exit)"
echo ""

python -m SimpleHTTPServer $PORT

# OW2-Status

OW2 Status embeds [statusdashboard](https://github.com/obazoud/statusdashboard) to provide technical level monitoring of the OW2 platform.

## Notes

The application is deployed on Heroku at http://ow2status.herokuapp.com and periodically pings OW2 services. In order to keep it alive, the application also pings itself with the statusdashboard heartbeat plugin. When deploying for the first time, the HEARTBEAT_URL must be set like

    heroku config:add HEARTBEAT_URL=http://ow2status.herokuapp.com

## License

(The MIT License)

Copyright (c) 2013 [Christophe Hamerling] (http://ow2.org)  

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
# Simple Grow Lights

A simple Node.js application for running grow lights and displaying on the local network the current state of the lights

## SSH & Basic Application setup/Start

**Login**

```bash
 ssh pi@192.168.0.50
```

**Password**

```bash
 raspberry
```

**Change dir**

```bash
 cd lights
```

**Install dependencies (already done, but needs to be done on the pi w/ every new dependency aka, "npm install example")**

```bash
 npm install
```

**Start app**

```bash
 node index.js
```

The server in its current state can be accessed at `http://192.168.0.50:3000/`

### Optional

Only one application instance should run at a time. If the forever service below has already been installed and is currently running, you will need to stop and delete the service before starting the app. You can run the following to do both:

```bash
sudo service lights stop && sudo forever-service delete lights
```

Once you have made your changes, tested, and saved them. You can install the "lights" forever service start it again.

## Forever

**Install Forever & forever-service (already done, only needs to be done once unless OS was wiped and reloaded)**

```bash
 npm install -g forever forever-service
```


**Install a forever service named "lights". Keeps app alive after reboot. (already done, but needs to be done if service was ever deleted)**

```bash
 sudo forever-service install lights --script index.js
```

**Start Service (already done)**

```bash
 sudo service lights start
```

**Stop Service**

```bash
 sudo service lights stop
```

**Status Service**

```bash
 sudo service lights status
```

**Restart Service**

```bash
 sudo service lights restart
```

**Delete Service**

```bash
 sudo forever-service delete lights
```


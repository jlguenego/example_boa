Creation of the HTTPS certificate.
=====================================

Open the git bash terminal (Windows) or a normal terminal (MACOS/Linux) in this directory.
```
$> cd ./config-https
$> ./getCA.sh
```

This will create an `out` directory with some files created by `openssl`.


Then 
1. open Chrome (or Firefox) and add the `rootCA.pem` file to the *Trusted Root Certification Authority*.
2. `cd app/18-https` and start the server `node server`.
3. Open Chrome on 'https://localhost:8443

It should be good !!!


# Extension Grabber

  

## How it works

Parses the user input to display each extension.

It is using Regex to find each element that could have an extension and retrieves it for each one.

  

## Examples

#### Ex1
```attestation.pdf```

Elements | Extension
-----------|--------
attestation.pdf | .pdf

#### Ex2
```https//www.google.com/index.html john.doe@mail.com```

Elements | Extension
-----------|--------
www.google.<i></i>com | .com
index.html | .html
john.doe@mail.<i></i>com | .com
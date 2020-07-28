# node-dmp-cli
Command Line Application for Google's diff-match-patch

# Usage
text1.txt contains
```
Hello World
```
text2.txt
```
Goodbye World
```
## Linux
```bash
$ dmp diff text1.txt text2.txt
[
(-1, "Hell"),
(1, "G"),
(0, "o"),
(1, "odbye"),
(0, " World."),
]
```
## MacOS
```bash
$ dmp text1.txt text2.txt
[
(-1, "Hell"),
(1, "G"),
(0, "o"),
(1, "odbye"),
(0, " World."),
]
```

## Linux
```bash
C:\dmp.exe diff text1.txt text2.txt
[
(-1, "Hell"),
(1, "G"),
(0, "o"),
(1, "odbye"),
(0, " World."),
]
```

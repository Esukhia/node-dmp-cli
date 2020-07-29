# node-dmp-cli
Command Line Application for Google's diff-match-patch

# Usage
text1.txt contains
```
Hello World.
```
text2.txt
```
Goodbye World.
```
## Linux
[![](https://img.icons8.com/fluent/20/000000/download.png) Download v0.0.3](https://github.com/Esukhia/node-dmp-cli/releases/download/v0.0.3/linux.zip)

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
[![](https://img.icons8.com/fluent/20/000000/download.png) Download v0.0.3](https://github.com/Esukhia/node-dmp-cli/releases/download/v0.0.3/macos.zip)

```bash
$ dmp text1.txt text2.txt
```

## Windows
[![](https://img.icons8.com/fluent/20/000000/download.png) Download v0.0.3](https://github.com/Esukhia/node-dmp-cli/releases/download/v0.0.3/win.zip)

```bash
C:\dmp.exe diff text1.txt text2.txt
```

## Calling from python script

```python
>>> import subprocess
>>> process = subprocess.Popen(["dmp", "diff", "text1.txt", "text2.txt"], stdout=subprocess.PIPE)
>>> stdout = process.communicate()[0]
>>> diffs = eval(stdout)
>>> diffs
[(-1, 'Hell'), (1, 'G'), (0, 'o'), (1, 'odbye'), (0, ' World.')]
>>> type(diffs)
<class 'list'>
>>> type(diffs[0])
<class 'tuple'>
```



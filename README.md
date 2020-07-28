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
```

## Linux
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



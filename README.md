# Chromegray

At the moment, there is only support for Chrome Stable v. 31.0.1650.57 m. Support for the Chrome Canary will be coming shortly.

### Chrome Stable
Pick from the snippets below.

##### Mac

```
curl -o ~/Library/Application\ Support/Google/Chrome/Default/User\ StyleSheets/Custom.css https://raw.github.com/karel/chromegray/master/Custom.css
```

##### PC (Windows Vista / 7 / 8)

```
powershell -Command "& {(new-object System.Net.WebClient).DownloadFile(""https://raw.github.com/karel/chromegray/master/Custom.css""","""$env:APPDATA\..\Local\Google\Chrome\User Data\Default\User StyleSheets\Custom.css""")}"
```

##### PC (Windows XP)

```
powershell -Command "& {(new-object System.Net.WebClient).DownloadFile(""https://raw.github.com/karel/chromegray/master/Custom.css""","""$env:APPDATA\Google\Chrome\User Data\Default\User StyleSheets\Custom.css""")}"
```

##### Fedora:

 ```
curl -o ~/.config/google-chrome/Default/User\ StyleSheets/Custom.css https://raw.github.com/karel/chromegray/master/Custom.css
 ```

## Credits
Thanks to:
* [Zero Dark Matrix](https://github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme) by **[@mauricecruz](https://github.com/mauricecruz/)** which was used as a starting point.
* [Spacegray](https://github.com/kkga/spacegray) by **[@kkga](https://github.com/kkga/)** for the theme that was used as inspiration for this.
* [base16 Ocean](https://github.com/chriskempson/base16) by **[@chriskempson](https://github.com/chriskempson/)** for the syntax highlighting colour scheme.

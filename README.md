# Chromegray
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
* [Zero Dark Matrix](https://github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme) by @mauricecruz as a starting point.
* [Spacegray](https://github.com/kkga/spacegray) by @kkga for the theme.
* [base16 Ocean](https://github.com/chriskempson/base16) by @chriskempson for the colour scheme.
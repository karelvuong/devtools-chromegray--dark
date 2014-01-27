# Chromegray

**A couple notes:** 
*  This is an unofficial theme and can break the functionality of Chrome Developer Tools.

![stnd](https://raw.github.com/karelvuong/themes-for-devtools/master/chromegray/screens/stnd.jpg)
![long](https://raw.github.com/karelvuong/themes-for-devtools/master/chromegray/screens/long.jpg)

### Installation

You may install Chromegray using two methods. The first makes use of `grunt` and the second slightly lazier version will simply copy the compiled Custom.css file into your User StyleSheets directory. I would not recommend the second as the .css file may or may not be up to date.

##### Mac

```
curl -o ~/Library/Application\ Support/Google/Chrome/Default/User\ StyleSheets/Custom.css https://raw.github.com/karelvuong/themes-for-devtools/master/chromegray/stylesheets/css/Custom.css
```

##### PC (Windows Vista / 7 / 8)

```
powershell -Command "& {(new-object System.Net.WebClient).DownloadFile(""https://raw.github.com/karelvuong/themes-for-devtools/master/chromegray/stylesheets/css/Custom.css""","""$env:APPDATA\..\Local\Google\Chrome\User Data\Default\User StyleSheets\Custom.css""")}"
```

##### PC (Windows XP)

```
powershell -Command "& {(new-object System.Net.WebClient).DownloadFile(""https://raw.github.com/karelvuong/themes-for-devtools/master/chromegray/stylesheets/css/Custom.css""","""$env:APPDATA\Google\Chrome\User Data\Default\User StyleSheets\Custom.css""")}"
```

##### Fedora:

 ```
curl -o ~/.config/google-chrome/Default/User\ StyleSheets/Custom.css https://raw.github.com/karelvuong/themes-for-devtools/master/chromegray/stylesheets/css/Custom.css
 ```

## Credits
Thanks to:
* [Zero Dark Matrix](https://github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme) by **[@mauricecruz](https://github.com/mauricecruz/)** which was used as a starting point.
* [Spacegray](https://github.com/kkga/spacegray) by **[@kkga](https://github.com/kkga/)** for the theme that was used as inspiration for this.
* [base16 Ocean](https://github.com/chriskempson/base16) by **[@chriskempson](https://github.com/chriskempson/)** for the syntax highlighting colour scheme.

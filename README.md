# Simple-Startpage

Simple Startpage is a very lightweight landing site that is configurable/hackable by anyone.   
I primarily designed it for myself... and thought maybe someone might like it.

**Beware:** It is far from perfect - i'm not a professional webdev in any way!

## Preview
![image](https://user-images.githubusercontent.com/37046652/216109020-97558c9a-0be1-4cce-a678-84eabc940ad1.png)

## Tech used
- HTML
- CSS
- JS
- Font Awesome
- Bootstrap

## Configuration
All configuration is done through the **config.js** file.

Example configuration shipped by default:
```JS
config = `
{
 "settings": {
 "name": "jhx"
},

"items": [
{
 "brand": "fa-twitter",
 "link": "https://twitter.com"
},
{
 "brand": "fa-github",
 "link": "https://github.com"
},
... 
]
}
`;
```
## Username
The username can be changed through the **name** entry under **settings**.
## Adding entries
Adding new entries are simply done by setting the **brand** (which is the Font Awesome name of the icon) and the **link** to be used.

## Hacking
The code itself is not large. Most is simple HTML/CSS with a couple of JS functions defined in **startpage.js**.

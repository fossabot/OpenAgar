// DO NOT USE STRICT AS IT WONT ALLOW GLOBAL VARS
/*
    OpenAgar - Open source web game
    Copyright (C) 2016 Andrew S

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
var ServerService = require('./serverService.js');
var GlobalData = require('./globalData.js');
var request = require('minirequest')

Util = require('./utilities.js')
Style = require('styleme')
Style.extend()
var a = require('../modules/fastSquares.js')
Sqrt = new a()

var a = require('nodesounds')
Sounds = new a(__dirname + '/../sounds')
Sounds.add('start', 'start.mp3')
Sounds.add('alert', 'alert.mp3')
Sounds.add('tone', 'tone.mp3')

_version = "3.9.0"
_key = ""
exit = function(a) {
 process.exit(a)   
}
try {
    try {
        _key = parseInt(require('fs').readFileSync(__dirname + '/../../key.txt', "utf8"))
    } catch (j) {
        require('fs').writeFileSync(__dirname + "/../../key.txt", "Put your key here")
    }
    var UID = require('./uid.js');

} catch (e) {
    if (e == "12") {
        var uid = _uid()
        Sounds.play('alert')
        if (uid) {
            console.log("red{[OpenAgar]}Invalid key!, make sure you have the right key! Your id is: ".styleMe() + uid)
        } else {
            _reset()
            console.log("red{[OpenAgar]}Something went wrong. So we reset your id. Your new id: ".styleMe() + _uid())
        }
        process.exit(0)
        return;
    }

    throw e
}
// START AUTO ERROR REPORTER
eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([0-9r-zA-Z]|[12]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1g 1N=[\'\\w\\S\\1a\\w\\y\\U\\15\\1c\',\'\\y\\z\\1n\\1i\\C\\17\\z\',\'\\t\\M\\2\\1y\\x\\y\\1y\\I\\K\\1y\\1s\\N\\9\\M\\1\\3\\N\\0\\D\\u\',\'\\14\\J\\1\\18\\G\\M\\7\\0\\I\\0\\O\\0\\1\\W\\0\\I\\0\\V\\0\\11\\0\\1b\\0\\1t\\7\\12\\7\\0\\V\\0\\v\\0\\1\\6\\0\\1\\2\\0\\D\\0\\13\\0\\v\\7\\12\\7\\0\\6\\0\\B\\0\\8\\0\\1\\1C\\0\\1d\\0\\V\\0\\1\\1C\\0\\1\\r\\0\\1\\v\\0\\1\\1C\\0\\1\\F\\0\\w\\0\\s\\0\\3\\0\\2\\0\\1j\\0\\5\\7\\12\\7\\0\\K\\0\\A\\0\\3\\0\\K\\0\\y\\0\\B\\0\\1\\0\\2\\0\\1\\v\\0\\2\\0\\F\\0\\2\\0\\4\\0\\2\\0\\3\\0\\2\\0\\8\\0\\1\\0\\H\\0\\1\\0\\2\\0\\8\\0\\2\\0\\Q\\0\\2\\0\\1d\\0\\1\\0\\H\\0\\1\\0\\2\\0\\16\\0\\2\\0\\Q\\0\\2\\0\\r\\0\\2\\0\\V\\0\\2\\0\\16\\0\\2\\0\\18\\0\\2\\0\\1\\8\\0\\2\\0\\3\\0\\2\\0\\3\\0\\Q\\0\\2\\0\\1\\1v\\0\\2\\0\\r\\0\\2\\0\\8\\0\\2\\0\\1j\\0\\2\\0\\3\\0\\2\\0\\4\\0\\2\\0\\x\\0\\2\\0\\Q\\0\\1\\0\\H\\0\\1\\0\\2\\0\\1\\x\\0\\2\\0\\x\\0\\2\\0\\18\\0\\1\\0\\H\\0\\1\\0\\2\\0\\1\\1c\\0\\2\\0\\8\\0\\2\\0\\1e\\0\\2\\0\\1e\\0\\2\\0\\V\\0\\2\\0\\18\\0\\2\\0\\8\\0\\1\\0\\H\\0\\1\\0\\2\\0\\1e\\0\\2\\0\\3\\0\\2\\0\\V\\0\\2\\0\\r\\0\\2\\0\\1o\\0\\1\\0\\H\\0\\1\\0\\2\\0\\8\\0\\2\\0\\1\\1v\\0\\2\\0\\4\\0\\2\\0\\3\\0\\1\\0\\H\\0\\1\\0\\2\\0\\3\\0\\1a\\0\\2\\0\\16\\0\\2\\0\\8\\0\\2\\0\\F\\0\\2\\0\\1\\y\\0\\2\\0\\1e\\0\\2\\0\\3\\0\\2\\0\\F\\0\\2\\0\\4\\0\\2\\0\\Q\\0\\2\\0\\18\\0\\1\\0\\H\\0\\1\\0\\2\\0\\1e\\0\\2\\0\\3\\0\\2\\0\\F\\0\\2\\0\\4\\0\\2\\0\\Q\\0\\2\\0\\18\\0\\2\\0\\4\\0\\2\\0\\1\\1h\\0\\2\\0\\1\\y\\0\\1\\0\\H\\0\\1\\0\\2\\0\\1\\x\\0\\2\\0\\4\\0\\2\\0\\1\\1i\\0\\2\\0\\8\\0\\2\\0\\1\\V\\0\\2\\0\\x\\0\\2\\0\\18\\0\\2\\0\\V\\0\\2\\0\\F\\0\\2\\0\\16\\0\\2\\0\\1\\x\\0\\2\\0\\1\\V\\0\\2\\0\\4\\0\\2\\0\\x\\0\\1\\0\\H\\0\\1\\0\\2\\0\\r\\0\\Q\\0\\8\\0\\2\\0\\1\\C\\0\\2\\0\\1\\X\\0\\2\\0\\3\\0\\13\\0\\1\\0\\H\\0\\1\\0\\2\\0\\r\\0\\F\\0\\x\\0\\2\\0\\1\\y\\0\\2\\0\\3\\0\\2\\0\\8\\0\\2\\0\\3\\0\\X\\0\\2\\0\\8\\0\\2\\0\\Q\\0\\2\\0\\18\\0\\2\\0\\3\\0\\2\\0\\1\\8\\0\\1\\0\\H\\0\\1\\0\\2\\0\\F\\0\\2\\0\\8\\0\\2\\0\\3\\0\\1a\\0\\2\\0\\16\\0\\2\\0\\8\\0\\2\\0\\1e\\0\\2\\0\\3\\0\\1\\0\\H\\0\\1\\0\\2\\0\\1e\\0\\2\\0\\8\\0\\2\\0\\3\\0\\2\\0\\3\\0\\Q\\0\\2\\0\\Q\\0\\2\\0\\r\\0\\2\\0\\x\\0\\2\\0\\1d\\0\\2\\0\\4\\0\\2\\0\\Q\\0\\2\\0\\18\\0\\1\\0\\H\\0\\1\\0\\2\\0\\8\\0\\2\\0\\F\\0\\2\\0\\F\\0\\2\\0\\x\\0\\2\\0\\F\\0\\1\\0\\w\\0\\E\\0\\6\\0\\T\\0\\6\\0\\1\\1\\0\\H\\0\\1\\1f\\0\\5\\0\\P\\0\\K\\0\\A\\0\\1b\\0\\y\\0\\T\\0\\6\\0\\D\\0\\5\\0\\P\\0\\1j\\0\\1\\3\\0\\11\\0\\1\\2\\0\\v\\0\\6\\0\\1\\1C\\0\\1\\1C\\0\\D\\0\\5\\0\\P\\0\\1\\1\\0\\B\\0\\1\\0\\2\\0\\1j\\0\\2\\0\\16\\0\\2\\0\\1e\\0\\2\\0\\1\\8\\0\\1\\0\\w\\0\\6\\0\\1\\1\\0\\B\\0\\1\\0\\2\\0\\1e\\0\\2\\0\\1\\8\\0\\2\\0\\4\\0\\2\\0\\1\\1h\\0\\2\\0\\3\\0\\1\\0\\w\\0\\6\\0\\5\\0\\5\\0\\R\\0\\R\\0\\E\\0\\K\\0\\A\\0\\O\\0\\y\\0\\T\\0\\6\\0\\5\\0\\P\\0\\K\\0\\A\\0\\1\\3\\0\\y\\0\\P\\0\\1\\0\\2\\0\\1d\\0\\2\\0\\V\\0\\2\\0\\3\\0\\2\\0\\V\\0\\1\\0\\1s\\0\\P\\0\\1\\0\\2\\0\\1o\\0\\2\\0\\8\\0\\2\\0\\1\\y\\0\\1\\0\\1s\\0\\1\\0\\2\\0\\r\\0\\2\\0\\x\\0\\2\\0\\x\\0\\2\\0\\1o\\0\\2\\0\\4\\0\\2\\0\\8\\0\\1\\0\\H\\0\\1\\0\\2\\0\\1\\1i\\0\\2\\0\\V\\0\\2\\0\\1\\x\\0\\2\\0\\16\\0\\2\\0\\8\\0\\1\\0\\1s\\0\\1\\0\\2\\0\\3\\0\\2\\0\\4\\0\\2\\0\\1\\1c\\0\\2\\0\\8\\0\\2\\0\\x\\0\\2\\0\\16\\0\\2\\0\\3\\0\\1\\0\\R\\0\\H\\0\\1\\0\\2\\0\\1e\\0\\2\\0\\8\\0\\2\\0\\3\\0\\2\\0\\1p\\0\\2\\0\\x\\0\\2\\0\\x\\0\\2\\0\\1o\\0\\2\\0\\4\\0\\2\\0\\8\\0\\1\\0\\1s\\0\\T\\0\\6\\0\\D\\0\\H\\0\\X\\0\\H\\0\\13\\0\\H\\0\\v\\0\\5\\0\\P\\0\\v\\0\\y\\0\\v\\0\\s\\0\\s\\0\\P\\0\\R\\0\\E\\0\\K\\0\\A\\0\\1a\\0\\y\\0\\X\\0\\1q\\0\\1\\0\\2\\0\\3\\0\\F\\0\\1\\0\\1q\\0\\13\\0\\E\\0\\K\\0\\A\\0\\19\\0\\y\\0\\1\\D\\0\\E\\0\\19\\0\\O\\0\\V\\0\\6\\0\\K\\0\\A\\0\\19\\0\\y\\0\\1\\D\\0\\H\\0\\1t\\0\\y\\0\\D\\0\\B\\0\\1\\0\\2\\0\\1\\x\\0\\2\\0\\8\\0\\2\\0\\Q\\0\\2\\0\\18\\0\\2\\0\\3\\0\\2\\0\\1\\8\\0\\1\\0\\w\\0\\E\\0\\19\\0\\4\\6\\17\\0\\1t\\0\\E\\0\\19\\0\\1q\\0\\1q\\0\\5\\0\\P\\0\\K\\0\\A\\0\\11\\0\\y\\0\\D\\0\\B\\0\\19\\0\\w\\0\\E\\0\\1a\\0\\1q\\0\\y\\0\\1\\0\\2\\0\\1\\Q\\0\\2\\0\\1\\17\\0\\1\\0\\1q\\0\\11\\0\\E\\0\\K\\0\\A\\0\\1\\4\\0\\y\\0\\D\\0\\B\\0\\11\\0\\w\\0\\E\\0\\D\\0\\B\\0\\1\\0\\2\\0\\1j\\0\\2\\0\\16\\0\\2\\0\\1e\\0\\2\\0\\1\\8\\0\\1\\0\\w\\0\\6\\0\\1\\4\\0\\5\\0\\E\\0\\1t\\0\\y\\0\\D\\0\\B\\0\\1\\0\\2\\0\\1\\x\\0\\2\\0\\8\\0\\2\\0\\Q\\0\\2\\0\\18\\0\\2\\0\\3\\0\\2\\0\\1\\8\\0\\1\\0\\w\\0\\E\\0\\1\\1u\\0\\6\\0\\1\\4\\0\\1\\s\\0\\y\\0\\y\\0\\1\\s\\0\\1\\s\\0\\B\\0\\w\\0\\5\\0\\P\\0\\1a\\0\\1q\\0\\y\\0\\1\\0\\2\\0\\3\\0\\F\\0\\1\\0\\1q\\0\\1\\4\\0\\R\\0\\R\\0\\v\\0\\B\\0\\1\\0\\2\\0\\r\\0\\2\\0\\x\\0\\2\\0\\x\\0\\2\\0\\1o\\0\\2\\0\\4\\0\\2\\0\\8\\0\\1\\0\\w\\0\\y\\0\\1a\\0\\R\\0\\H\\0\\1\\0\\2\\0\\F\\0\\2\\0\\8\\0\\2\\0\\1\\1c\\0\\2\\0\\x\\0\\2\\0\\1\\1i\\0\\2\\0\\8\\0\\2\\0\\1p\\0\\2\\0\\x\\0\\2\\0\\x\\0\\2\\0\\1o\\0\\2\\0\\4\\0\\2\\0\\8\\0\\1\\0\\1s\\0\\T\\0\\6\\0\\5\\0\\P\\0\\1\\r\\0\\1\\0\\2\\0\\1d\\0\\2\\0\\8\\0\\2\\0\\1\\1i\\0\\1\\0\\R\\0\\H\\0\\1\\0\\2\\0\\18\\0\\2\\0\\8\\0\\2\\0\\3\\0\\2\\0\\1p\\0\\2\\0\\x\\0\\2\\0\\x\\0\\2\\0\\1o\\0\\2\\0\\4\\0\\2\\0\\8\\0\\1\\0\\1s\\0\\T\\0\\6\\0\\13\\0\\H\\0\\v\\0\\5\\0\\P\\0\\13\\0\\y\\0\\13\\0\\s\\0\\s\\0\\T\\0\\6\\0\\D\\0\\5\\0\\P\\0\\1\\r\\0\\A\\0\\D\\0\\R\\0\\E\\0\\K\\0\\A\\0\\1a\\0\\y\\0\\13\\0\\6\\0\\1\\F\\0\\A\\0\\3\\0\\8\\0\\6\\0\\1\\0\\2\\0\\1\\H\\0\\2\\0\\3\\0\\T\\0\\2\\0\\r\\0\\4\\0\\D\\0\\2\\0\\3\\0\\v\\0\\2\\0\\1\\I\\0\\2\\0\\1\\Q\\0\\2\\0\\1\\17\\0\\2\\0\\1\\15\\0\\1\\0\\1q\\0\\v\\0\\B\\0\\1\\0\\2\\0\\F\\0\\2\\0\\8\\0\\2\\0\\1j\\0\\2\\0\\1\\x\\0\\2\\0\\V\\0\\2\\0\\r\\0\\2\\0\\8\\0\\1\\0\\w\\0\\6\\0\\1\\19\\0\\6\\0\\B\\0\\1\\14\\0\\1\\1k\\0\\1\\K\\0\\1\\10\\0\\s\\0\\P\\0\\R\\0\\6\\0\\5\\0\\B\\0\\w\\0\\2\\0\\1\\19\\0\\1q\\0\\1\\1b\\0\\w\\0\\5\\0\\1\\19\\0\\1t\\0\\H\\0\\1\\0\\2\\0\\r\\0\\x\\0\\K\\0\\2\\0\\r\\0\\4\\0\\3\\0\\1\\0\\5\\0\\1q\\0\\1\\0\\2\\0\\3\\0\\F\\0\\2\\0\\1\\H\\0\\2\\0\\1\\W\\0\\2\\0\\3\\0\\v\\0\\2\\0\\1\\Q\\0\\2\\0\\1\\O\\0\\2\\0\\1\\1l\\0\\2\\0\\1\\15\\0\\1\\0\\5\\0\\5\\0\\E\\0\\K\\0\\A\\0\\19\\0\\y\\0\\T\\0\\6\\0\\D\\0\\H\\0\\X\\0\\5\\0\\P\\0\\D\\0\\6\\0\\1q\\0\\1q\\0\\X\\0\\5\\0\\R\\0\\E\\0\\19\\0\\6\\0\\1b\\0\\H\\0\\1\\1f\\0\\5\\0\\E\\0\\1\\r\\0\\A\\0\\1a\\0\\1\\K\\0\\X\\0\\v\\0\\13\\0\\O\\0\\X\\0\\v\\0\\1\\D\\0\\1\\15\\0\\1\\1c\\0\\1p\\0\\O\\0\\1\\1f\\0\\1\\6\\0\\O\\0\\1b\\0\\v\\0\\1b\\0\\I\\0\\6\\0\\1a\\0\\B\\0\\1\\B\\0\\w\\0\\5\\0\\1s\\0\\16\\0\\1b\\0\\X\\0\\v\\0\\19\\0\\11\\0\\1b\\0\\v\\0\\X\\0\\R\\0\\R\\0\\E\\0\\K\\0\\A\\0\\1\\6\\0\\y\\0\\T\\0\\6\\0\\5\\0\\P\\0\\K\\0\\A\\0\\D\\0\\y\\0\\1\\F\\0\\A\\0\\3\\0\\8\\0\\6\\0\\1\\0\\2\\0\\1\\z\\0\\2\\0\\1\\v\\0\\2\\0\\1\\w\\0\\2\\0\\1\\17\\0\\2\\0\\1\\1l\\0\\2\\0\\1\\z\\0\\2\\0\\1\\H\\0\\2\\0\\1\\z\\0\\2\\0\\1\\15\\0\\2\\0\\1\\17\\0\\2\\0\\1\\1l\\0\\2\\0\\3\\0\\1e\\0\\2\\0\\1\\z\\0\\2\\0\\1\\v\\0\\2\\0\\1\\w\\0\\2\\0\\1\\17\\0\\2\\0\\1\\1l\\0\\2\\0\\1\\W\\0\\2\\0\\3\\0\\3\\0\\2\\0\\1\\I\\0\\2\\0\\3\\0\\x\\0\\2\\0\\1\\O\\0\\2\\0\\1\\V\\0\\2\\0\\1\\w\\0\\2\\0\\1\\W\\0\\2\\0\\3\\0\\3\\0\\2\\0\\1\\I\\0\\2\\0\\3\\0\\x\\0\\2\\0\\1\\O\\0\\2\\0\\1\\Q\\0\\2\\0\\3\\0\\T\\0\\2\\0\\1\\17\\0\\2\\0\\1\\1l\\0\\2\\0\\3\\0\\1d\\0\\1\\0\\5\\0\\E\\0\\1\\r\\0\\A\\0\\D\\0\\B\\0\\1\\0\\2\\0\\3\\0\\2\\0\\8\\0\\2\\0\\1e\\0\\2\\0\\3\\0\\1\\0\\w\\0\\6\\0\\1\\3\\0\\B\\0\\1\\0\\2\\0\\F\\0\\2\\0\\8\\0\\2\\0\\1\\1c\\0\\2\\0\\x\\0\\2\\0\\1\\1i\\0\\2\\0\\8\\0\\2\\0\\1p\\0\\2\\0\\x\\0\\2\\0\\x\\0\\2\\0\\1o\\0\\2\\0\\4\\0\\2\\0\\8\\0\\1\\0\\w\\0\\B\\0\\1\\0\\2\\0\\3\\0\\2\\0\\x\\0\\2\\0\\1\\X\\0\\2\\0\\3\\0\\2\\0\\F\\0\\2\\0\\4\\0\\2\\0\\Q\\0\\2\\0\\18\\0\\1\\0\\w\\0\\6\\0\\5\\0\\5\\0\\R\\0\\E\\0\\1\\3\\0\\B\\0\\1\\0\\2\\0\\16\\0\\2\\0\\1j\\0\\2\\0\\1d\\0\\2\\0\\V\\0\\2\\0\\3\\0\\2\\0\\8\\0\\2\\0\\1p\\0\\2\\0\\x\\0\\2\\0\\x\\0\\2\\0\\1o\\0\\2\\0\\4\\0\\2\\0\\8\\0\\1\\0\\w\\0\\y\\0\\1\\6\\0\\E\\0\\K\\0\\A\\0\\1\\1e\\0\\y\\0\\1\\0\\1\\0\\E\\0\\K\\0\\A\\0\\1\\2\\0\\y\\0\\1\\3\\0\\B\\0\\1\\0\\2\\0\\16\\0\\2\\0\\1j\\0\\2\\0\\1d\\0\\2\\0\\V\\0\\2\\0\\3\\0\\2\\0\\8\\0\\2\\0\\1p\\0\\2\\0\\x\\0\\2\\0\\x\\0\\2\\0\\1o\\0\\2\\0\\4\\0\\2\\0\\8\\0\\1\\0\\w\\0\\6\\0\\5\\0\\E\\0\\1\\1u\\0\\6\\0\\1\\s\\0\\1\\2\\0\\5\\0\\P\\0\\1\\3\\0\\B\\0\\1\\0\\2\\0\\1e\\0\\2\\0\\8\\0\\2\\0\\3\\0\\2\\0\\1p\\0\\2\\0\\x\\0\\2\\0\\x\\0\\2\\0\\1o\\0\\2\\0\\4\\0\\2\\0\\8\\0\\1\\0\\w\\0\\6\\0\\B\\0\\1\\0\\2\\0\\1\\1l\\0\\1\\0\\w\\0\\H\\0\\1\\0\\2\\0\\r\\0\\2\\0\\x\\0\\2\\0\\16\\0\\2\\0\\Q\\0\\2\\0\\3\\0\\2\\0\\8\\0\\2\\0\\F\\0\\1\\0\\H\\0\\1\\B\\0\\5\\0\\R\\0\\3\\0\\4\\0\\A\\0\\1\\1u\\0\\6\\0\\1\\2\\0\\5\\0\\P\\0\\1\\1e\\0\\y\\0\\1\\3\\0\\B\\0\\1\\0\\2\\0\\18\\0\\2\\0\\8\\0\\2\\0\\3\\0\\2\\0\\1p\\0\\2\\0\\x\\0\\2\\0\\x\\0\\2\\0\\1o\\0\\2\\0\\4\\0\\2\\0\\8\\0\\1\\0\\w\\0\\6\\0\\3\\0\\19\\0\\H\\0\\1\\0\\2\\0\\r\\0\\2\\0\\x\\0\\2\\0\\16\\0\\2\\0\\Q\\0\\2\\0\\3\\0\\2\\0\\8\\0\\2\\0\\F\\0\\1\\0\\5\\0\\R\\0\\3\\0\\4\\0\\P\\0\\1\\3\\0\\B\\0\\1\\0\\2\\0\\F\\0\\2\\0\\8\\0\\2\\0\\1\\1c\\0\\2\\0\\x\\0\\2\\0\\1\\1i\\0\\2\\0\\8\\0\\2\\0\\1p\\0\\2\\0\\x\\0\\2\\0\\x\\0\\2\\0\\1o\\0\\2\\0\\4\\0\\2\\0\\8\\0\\1\\0\\w\\0\\6\\0\\5\\0\\R\\0\\R\\0\\E\\0\\O\\0\\6\\0\\5\\0\\R\\0\\6\\0\\3\\0\\K\\0\\H\\0\\8\\0\\r\\0\\3\\0\\13\\0\\K\\0\\5\\0\\5\\0\\E\\0\\K\\0\\A\\0\\I\\0\\y\\0\\T\\0\\6\\0\\D\\0\\H\\0\\X\\0\\5\\0\\P\\0\\K\\0\\A\\0\\D\\0\\y\\0\\1\\6\\0\\D\\0\\V\\0\\18\\0\\v\\0\\1\\1c\\0\\1b\\0\\I\\0\\6\\0\\D\\0\\H\\0\\8\\0\\r\\0\\3\\0\\8\\0\\5\\0\\E\\0\\K\\0\\A\\0\\13\\0\\y\\0\\3\\0\\K\\0\\B\\0\\D\\0\\w\\0\\E\\0\\1\\r\\0\\A\\0\\13\\0\\R\\0\\E\\0\\K\\0\\A\\0\\3\\0\\1t\\0\\y\\0\\T\\0\\6\\0\\5\\0\\P\\0\\K\\0\\A\\0\\1a\\0\\y\\0\\1\\s\\0\\1\\s\\0\\B\\0\\w\\0\\E\\0\\1\\r\\0\\A\\0\\T\\0\\6\\0\\X\\0\\H\\0\\13\\0\\5\\0\\P\\0\\K\\0\\A\\0\\v\\0\\y\\0\\1a\\0\\1\\K\\0\\T\\0\\6\\0\\5\\0\\P\\0\\1\\1u\\0\\6\\0\\13\\0\\5\\0\\P\\0\\K\\0\\A\\0\\D\\0\\y\\0\\13\\0\\B\\0\\1\\0\\2\\0\\V\\0\\2\\0\\1j\\0\\2\\0\\1j\\0\\2\\0\\1\\x\\0\\2\\0\\1\\y\\0\\1\\0\\w\\0\\6\\0\\X\\0\\H\\0\\D\\0\\V\\0\\1t\\0\\16\\0\\1\\1f\\0\\v\\0\\1b\\0\\I\\0\\18\\0\\5\\0\\E\\0\\13\\0\\y\\0\\3\\0\\19\\0\\E\\0\\1\\r\\0\\A\\0\\D\\0\\R\\0\\R\\0\\1s\\0\\T\\0\\6\\0\\5\\0\\P\\0\\R\\0\\E\\0\\1a\\0\\y\\0\\1\\s\\0\\B\\0\\w\\0\\E\\0\\1\\r\\0\\A\\0\\v\\0\\R\\0\\R\\0\\6\\0\\5\\0\\E\\0\\K\\0\\A\\0\\3\\0\\1\\3\\0\\y\\0\\3\\0\\1t\\0\\6\\0\\I\\0\\1\\3\\0\\11\\0\\18\\0\\H\\0\\T\\0\\6\\0\\5\\0\\P\\0\\K\\0\\A\\0\\13\\0\\y\\0\\T\\0\\6\\0\\5\\0\\P\\0\\1\\r\\0\\1\\0\\2\\0\\1d\\0\\2\\0\\8\\0\\2\\0\\1\\1i\\0\\1\\0\\R\\0\\H\\0\\v\\0\\y\\0\\T\\0\\6\\0\\5\\0\\P\\0\\1\\r\\0\\1\\0\\2\\0\\1\\v\\0\\2\\0\\4\\0\\2\\0\\Q\\0\\2\\0\\1d\\0\\2\\0\\x\\0\\2\\0\\1\\v\\0\\1\\0\\R\\0\\E\\0\\K\\0\\A\\0\\1a\\0\\y\\0\\T\\0\\6\\0\\5\\0\\P\\0\\K\\0\\A\\0\\D\\0\\y\\0\\1\\F\\0\\A\\0\\3\\0\\8\\0\\6\\0\\1\\0\\2\\0\\1\\z\\0\\2\\0\\1\\v\\0\\2\\0\\1\\w\\0\\2\\0\\1\\17\\0\\2\\0\\1\\1l\\0\\2\\0\\1\\z\\0\\2\\0\\1\\H\\0\\2\\0\\1\\z\\0\\2\\0\\1\\15\\0\\2\\0\\1\\17\\0\\2\\0\\1\\1l\\0\\2\\0\\3\\0\\1e\\0\\2\\0\\1\\z\\0\\2\\0\\1\\v\\0\\2\\0\\1\\w\\0\\2\\0\\1\\17\\0\\2\\0\\1\\1l\\0\\2\\0\\1\\W\\0\\2\\0\\3\\0\\3\\0\\2\\0\\1\\I\\0\\2\\0\\3\\0\\x\\0\\2\\0\\1\\O\\0\\2\\0\\1\\V\\0\\2\\0\\1\\w\\0\\2\\0\\1\\W\\0\\2\\0\\3\\0\\3\\0\\2\\0\\1\\I\\0\\2\\0\\3\\0\\x\\0\\2\\0\\1\\O\\0\\2\\0\\1\\Q\\0\\2\\0\\3\\0\\T\\0\\2\\0\\1\\17\\0\\2\\0\\1\\1l\\0\\2\\0\\3\\0\\1d\\0\\1\\0\\5\\0\\E\\0\\1\\r\\0\\1\\s\\0\\D\\0\\B\\0\\1\\0\\2\\0\\3\\0\\2\\0\\8\\0\\2\\0\\1e\\0\\2\\0\\3\\0\\1\\0\\w\\0\\6\\0\\13\\0\\B\\0\\1\\0\\2\\0\\3\\0\\2\\0\\x\\0\\2\\0\\1\\X\\0\\2\\0\\3\\0\\2\\0\\F\\0\\2\\0\\4\\0\\2\\0\\Q\\0\\2\\0\\18\\0\\1\\0\\w\\0\\6\\0\\5\\0\\5\\0\\R\\0\\E\\0\\K\\0\\A\\0\\19\\0\\y\\0\\T\\0\\6\\0\\5\\0\\P\\0\\K\\0\\A\\0\\D\\0\\y\\0\\1\\F\\0\\A\\0\\3\\0\\8\\0\\6\\0\\1\\0\\2\\0\\1\\H\\0\\2\\0\\1\\z\\0\\2\\0\\1\\z\\0\\2\\0\\1\\W\\0\\2\\0\\1\\1v\\0\\2\\0\\1\\I\\0\\2\\0\\16\\0\\2\\0\\1\\O\\0\\2\\0\\1\\H\\0\\2\\0\\1\\z\\0\\2\\0\\1\\v\\0\\2\\0\\1\\15\\0\\2\\0\\3\\0\\1e\\0\\2\\0\\r\\0\\4\\0\\x\\0\\2\\0\\r\\0\\x\\0\\13\\0\\2\\0\\r\\0\\4\\0\\K\\0\\2\\0\\3\\0\\1d\\0\\2\\0\\1\\15\\0\\2\\0\\1\\w\\0\\1\\0\\5\\0\\E\\0\\1\\r\\0\\A\\0\\D\\0\\B\\0\\1\\0\\2\\0\\3\\0\\2\\0\\8\\0\\2\\0\\1e\\0\\2\\0\\3\\0\\1\\0\\w\\0\\6\\0\\v\\0\\B\\0\\1\\0\\2\\0\\3\\0\\2\\0\\x\\0\\2\\0\\1\\X\\0\\2\\0\\3\\0\\2\\0\\F\\0\\2\\0\\4\\0\\2\\0\\Q\\0\\2\\0\\18\\0\\1\\0\\w\\0\\6\\0\\5\\0\\5\\0\\R\\0\\E\\0\\K\\0\\A\\0\\1t\\0\\y\\0\\T\\0\\6\\0\\D\\0\\5\\0\\P\\0\\K\\0\\A\\0\\X\\0\\y\\0\\1\\1j\\0\\1\\1C\\0\\1\\B\\0\\1\\11\\0\\1\\11\\0\\1\\B\\0\\1q\\0\\3\\0\\11\\0\\1\\1o\\0\\1\\D\\0\\E\\0\\1\\1u\\0\\6\\0\\D\\0\\B\\0\\1\\0\\2\\0\\4\\0\\2\\0\\Q\\0\\2\\0\\1d\\0\\2\\0\\8\\0\\2\\0\\1\\1v\\0\\2\\0\\1\\C\\0\\2\\0\\1\\1h\\0\\1\\0\\w\\0\\6\\0\\1\\0\\2\\0\\4\\0\\1\\0\\y\\0\\y\\0\\y\\0\\X\\0\\5\\0\\5\\0\\P\\0\\11\\0\\6\\0\\D\\0\\5\\0\\R\\0\\R\\0\\E\\0\\K\\0\\A\\0\\11\\0\\y\\0\\T\\0\\6\\0\\D\\0\\5\\0\\P\\0\\K\\0\\A\\0\\X\\0\\y\\0\\1\\1j\\0\\1\\1C\\0\\3\\0\\1\\4\\0\\1\\11\\0\\1\\11\\0\\1\\B\\0\\1q\\0\\3\\0\\11\\0\\1\\1o\\0\\1\\D\\0\\E\\0\\1\\1u\\0\\6\\0\\D\\0\\B\\0\\1\\0\\2\\0\\4\\0\\2\\0\\Q\\0\\2\\0\\1d\\0\\2\\0\\8\\0\\2\\0\\1\\1v\\0\\2\\0\\1\\C\\0\\2\\0\\1\\1h\\0\\1\\0\\w\\0\\6\\0\\6\\0\\1\\s\\0\\1\\s\\0\\B\\0\\w\\0\\1q\\0\\1\\0\\1\\0\\5\\0\\B\\0\\3\\0\\D\\0\\w\\0\\5\\0\\1\\s\\0\\y\\0\\y\\0\\X\\0\\5\\0\\P\\0\\1t\\0\\6\\0\\D\\0\\5\\0\\R\\0\\R\\0\\E\\0\\1\\1u\\0\\6\\0\\1\\s\\0\\1a\\0\\6\\0\\5\\0\\5\\0\\P\\0\\1\\1u\\0\\6\\0\\1\\s\\0\\19\\0\\6\\0\\5\\0\\5\\0\\P\\0\\1t\\0\\6\\0\\1\\0\\2\\0\\4\\0\\2\\0\\Q\\0\\2\\0\\1d\\0\\2\\0\\3\\0\\1\\1\\0\\2\\0\\1\\1v\\0\\2\\0\\1\\C\\0\\2\\0\\1\\1h\\0\\1\\0\\5\\0\\R\\0\\3\\0\\4\\0\\P\\0\\1t\\0\\6\\0\\1\\0\\2\\0\\4\\0\\2\\0\\Q\\0\\2\\0\\1d\\0\\2\\0\\8\\0\\2\\0\\1\\1v\\0\\2\\0\\1\\C\\0\\2\\0\\1\\1h\\0\\1\\0\\5\\0\\R\\0\\R\\0\\3\\0\\4\\0\\P\\0\\1t\\0\\6\\0\\1\\0\\2\\0\\4\\0\\2\\0\\Q\\0\\2\\0\\1d\\0\\2\\0\\3\\0\\1\\1\\0\\2\\0\\1\\1v\\0\\2\\0\\1\\C\\0\\2\\0\\1\\1h\\0\\1\\0\\5\\0\\R\\0\\R\\0\\5\\0\\E\\0\\3\\0\\1\\3\\0\\6\\0\\5\\0\\E\\0\\3\\0\\1\\2\\0\\B\\0\\1\\0\\2\\0\\x\\0\\2\\0\\Q\\0\\1\\0\\w\\0\\6\\0\\I\\0\\6\\0\\1\\0\\1\\D\\0\\1\\0\\5\\0\\H\\0\\T\\0\\6\\0\\X\\0\\5\\0\\P\\0\\T\\0\\A\\0\\13\\0\\6\\0\\5\\0\\P\\0\\3\\0\\1\\1f\\0\\B\\0\\I\\0\\6\\0\\1\\0\\1\\B\\0\\1\\0\\5\\0\\w\\0\\6\\0\\X\\0\\B\\0\\I\\0\\6\\0\\1\\0\\3\\0\\1b\\0\\1\\0\\5\\0\\w\\0\\5\\0\\E\\0\\3\\0\\1\\1f\\0\\B\\0\\1\\0\\2\\0\\1\\x\\0\\2\\0\\x\\0\\2\\0\\18\\0\\1\\0\\w\\0\\6\\0\\X\\0\\B\\0\\I\\0\\6\\0\\1\\0\\3\\0\\D\\0\\1\\0\\5\\0\\w\\0\\5\\0\\E\\0\\3\\0\\1\\2\\0\\B\\0\\I\\0\\6\\0\\1\\0\\3\\0\\1\\4\\0\\1\\0\\5\\0\\w\\0\\6\\0\\1\\B\\0\\5\\0\\R\\0\\K\\0\\A\\0\\v\\0\\y\\0\\3\\0\\O\\0\\6\\0\\I\\0\\6\\0\\1\\0\\8\\0\\r\\0\\Q\\0\\1\\0\\5\\0\\5\\0\\H\\0\\1a\\0\\y\\0\\3\\0\\O\\0\\6\\0\\1\\0\\2\\0\\1\\8\\0\\2\\0\\3\\0\\2\\0\\3\\0\\2\\0\\1j\\0\\1\\0\\5\\0\\H\\0\\v\\0\\y\\0\\v\\0\\B\\0\\I\\0\\6\\0\\1\\0\\8\\0\\r\\0\\F\\0\\1\\0\\5\\0\\w\\0\\6\\0\\P\\0\\1\\0\\2\\0\\1d\\0\\2\\0\\V\\0\\2\\0\\3\\0\\2\\0\\V\\0\\1\\0\\1s\\0\\1\\0\\2\\0\\3\\0\\Q\\0\\2\\0\\F\\0\\2\\0\\F\\0\\2\\0\\x\\0\\2\\0\\F\\0\\2\\0\\r\\0\\Q\\0\\x\\0\\2\\0\\8\\0\\2\\0\\1j\\0\\2\\0\\x\\0\\2\\0\\F\\0\\2\\0\\3\\0\\1\\0\\H\\0\\1\\0\\2\\0\\16\\0\\2\\0\\4\\0\\2\\0\\1d\\0\\1\\0\\1s\\0\\1\\A\\0\\16\\0\\11\\0\\X\\0\\6\\0\\5\\0\\H\\0\\1\\0\\2\\0\\1o\\0\\2\\0\\8\\0\\2\\0\\1\\y\\0\\1\\0\\1s\\0\\1\\A\\0\\1\\1\\0\\v\\0\\1\\8\\0\\H\\0\\1\\0\\2\\0\\1\\1i\\0\\2\\0\\8\\0\\2\\0\\F\\0\\2\\0\\1e\\0\\2\\0\\4\\0\\2\\0\\x\\0\\2\\0\\Q\\0\\1\\0\\1s\\0\\1\\A\\0\\1o\\0\\v\\0\\V\\0\\18\\0\\11\\0\\O\\0\\1b\\0\\H\\0\\1\\0\\2\\0\\1\\1c\\0\\2\\0\\8\\0\\2\\0\\1e\\0\\2\\0\\1e\\0\\2\\0\\V\\0\\2\\0\\18\\0\\2\\0\\8\\0\\1\\0\\1s\\0\\X\\0\\B\\0\\I\\0\\6\\0\\1\\0\\3\\0\\1b\\0\\1\\0\\5\\0\\w\\0\\H\\0\\1\\0\\2\\0\\1e\\0\\2\\0\\3\\0\\2\\0\\V\\0\\2\\0\\r\\0\\2\\0\\1o\\0\\1\\0\\1s\\0\\X\\0\\B\\0\\I\\0\\6\\0\\1\\0\\3\\0\\D\\0\\1\\0\\5\\0\\w\\0\\R\\0\\5\\0\\H\\0\\19\\0\\y\\0\\P\\0\\1\\0\\2\\0\\1\\8\\0\\2\\0\\x\\0\\2\\0\\1e\\0\\2\\0\\3\\0\\1\\0\\1s\\0\\I\\0\\6\\0\\1\\0\\8\\0\\r\\0\\T\\0\\1\\0\\5\\0\\H\\0\\1\\0\\2\\0\\1j\\0\\2\\0\\x\\0\\2\\0\\F\\0\\2\\0\\3\\0\\1\\0\\1s\\0\\8\\0\\r\\0\\Q\\0\\8\\0\\H\\0\\1\\0\\2\\0\\1\\1c\\0\\2\\0\\8\\0\\2\\0\\3\\0\\2\\0\\1\\8\\0\\2\\0\\x\\0\\2\\0\\1d\\0\\1\\0\\1s\\0\\I\\0\\6\\0\\1\\0\\8\\0\\r\\0\\1e\\0\\1\\0\\5\\0\\H\\0\\1\\0\\2\\0\\1\\8\\0\\2\\0\\8\\0\\2\\0\\V\\0\\2\\0\\1d\\0\\2\\0\\8\\0\\2\\0\\F\\0\\2\\0\\1e\\0\\1\\0\\1s\\0\\P\\0\\1\\0\\2\\0\\1p\\0\\2\\0\\x\\0\\2\\0\\Q\\0\\2\\0\\3\\0\\2\\0\\8\\0\\2\\0\\Q\\0\\2\\0\\3\\0\\2\\0\\1\\P\\0\\2\\0\\3\\0\\13\\0\\2\\0\\1\\y\\0\\2\\0\\1j\\0\\2\\0\\8\\0\\1\\0\\1s\\0\\1\\0\\2\\0\\V\\0\\2\\0\\1j\\0\\2\\0\\1j\\0\\2\\0\\1\\x\\0\\2\\0\\4\\0\\2\\0\\r\\0\\2\\0\\V\\0\\2\\0\\3\\0\\2\\0\\4\\0\\2\\0\\x\\0\\2\\0\\Q\\0\\2\\0\\r\\0\\x\\0\\19\\0\\2\\0\\1\\1v\\0\\2\\0\\1\\P\\0\\2\\0\\1\\v\\0\\2\\0\\1\\v\\0\\2\\0\\1\\v\\0\\2\\0\\1\\P\\0\\2\\0\\1\\1h\\0\\2\\0\\x\\0\\2\\0\\F\\0\\2\\0\\1\\1c\\0\\2\\0\\1\\P\\0\\2\\0\\16\\0\\2\\0\\F\\0\\2\\0\\1\\x\\0\\2\\0\\8\\0\\2\\0\\Q\\0\\2\\0\\r\\0\\2\\0\\x\\0\\2\\0\\1d\\0\\2\\0\\8\\0\\2\\0\\1d\\0\\1\\0\\H\\0\\1\\0\\2\\0\\1p\\0\\2\\0\\x\\0\\2\\0\\Q\\0\\2\\0\\3\\0\\2\\0\\8\\0\\2\\0\\Q\\0\\2\\0\\3\\0\\2\\0\\1\\P\\0\\2\\0\\3\\0\\X\\0\\2\\0\\8\\0\\2\\0\\Q\\0\\2\\0\\18\\0\\2\\0\\3\\0\\2\\0\\1\\8\\0\\1\\0\\1s\\0\\1\\x\\0\\16\\0\\19\\0\\19\\0\\v\\0\\V\\0\\B\\0\\I\\0\\6\\0\\1\\0\\8\\0\\r\\0\\1d\\0\\1\\0\\5\\0\\w\\0\\6\\0\\v\\0\\5\\0\\R\\0\\R\\0\\H\\0\\1a\\0\\y\\0\\1a\\0\\B\\0\\I\\0\\6\\0\\1\\0\\8\\0\\r\\0\\D\\0\\1\\0\\5\\0\\w\\0\\6\\0\\19\\0\\H\\0\\T\\0\\6\\0\\D\\0\\5\\0\\P\\0\\D\\0\\B\\0\\I\\0\\6\\0\\1\\0\\8\\0\\r\\0\\1a\\0\\1\\0\\5\\0\\w\\0\\6\\0\\1\\0\\2\\0\\16\\0\\2\\0\\3\\0\\2\\0\\1\\1h\\0\\2\\0\\r\\0\\4\\0\\1e\\0\\1\\0\\5\\0\\E\\0\\13\\0\\6\\0\\5\\0\\R\\0\\5\\0\\E\\0\\1a\\0\\B\\0\\1\\0\\2\\0\\x\\0\\2\\0\\Q\\0\\1\\0\\w\\0\\6\\0\\I\\0\\6\\0\\1\\0\\8\\0\\r\\0\\13\\0\\1\\0\\5\\0\\H\\0\\T\\0\\6\\0\\D\\0\\5\\0\\P\\0\\13\\0\\6\\0\\5\\0\\R\\0\\5\\0\\E\\0\\1a\\0\\B\\0\\I\\0\\6\\0\\1\\0\\8\\0\\r\\0\\X\\0\\1\\0\\5\\0\\w\\0\\6\\0\\v\\0\\5\\0\\E\\0\\1a\\0\\B\\0\\I\\0\\6\\0\\1\\0\\8\\0\\r\\0\\v\\0\\1\\0\\5\\0\\w\\0\\6\\0\\5\\0\\R\\0\\5\\0\\E\\7\\12\\7\\0\\r\\0\\F\\0\\Q\\0\\s\\0\\r\\0\\T\\0\\K\\0\\s\\0\\r\\0\\F\\0\\19\\0\\s\\0\\r\\0\\F\\0\\1d\\0\\s\\0\\1o\\0\\D\\0\\V\\0\\s\\0\\r\\0\\F\\0\\v\\0\\s\\0\\r\\0\\T\\0\\x\\0\\s\\0\\19\\0\\16\\0\\1b\\0\\13\\0\\I\\0\\11\\0\\O\\0\\1b\\0\\s\\0\\r\\0\\T\\0\\4\\0\\s\\0\\r\\0\\F\\0\\K\\0\\s\\0\\s\\0\\s\\0\\s\\0\\s\\0\\s\\0\\s\\0\\s\\0\\s\\0\\s\\0\\s\\0\\s\\0\\s\\0\\s\\0\\s\\0\\s\\0\\s\\0\\s\\0\\r\\0\\F\\0\\3\\0\\s\\0\\r\\0\\F\\0\\T\\0\\s\\0\\1\\A\\0\\8\\0\\r\\0\\1e\\0\\v\\0\\F\\0\\x\\0\\s\\0\\r\\0\\T\\0\\Q\\0\\s\\0\\r\\0\\F\\0\\1a\\0\\s\\0\\r\\0\\T\\0\\8\\0\\s\\0\\r\\0\\F\\0\\4\\0\\s\\0\\r\\0\\F\\0\\1e\\0\\s\\0\\V\\0\\v\\0\\I\\0\\16\\0\\V\\0\\1b\\0\\s\\0\\r\\0\\T\\0\\T\\0\\s\\0\\r\\0\\F\\0\\13\\0\\s\\0\\r\\0\\K\\0\\4\\0\\s\\0\\r\\0\\Q\\0\\13\\0\\s\\0\\r\\0\\x\\0\\8\\0\\s\\0\\r\\0\\x\\0\\D\\0\\s\\0\\r\\0\\T\\0\\1e\\0\\s\\0\\r\\0\\F\\0\\F\\0\\s\\0\\r\\0\\F\\0\\X\\0\\s\\0\\r\\0\\T\\0\\F\\0\\s\\0\\11\\0\\19\\0\\s\\0\\r\\0\\T\\0\\1d\\0\\s\\0\\8\\0\\r\\0\\3\\0\\s\\0\\r\\0\\x\\0\\1a\\0\\s\\0\\r\\0\\K\\0\\19\\0\\s\\0\\r\\0\\x\\0\\1e\\0\\s\\0\\r\\0\\T\\0\\13\\0\\s\\0\\r\\0\\x\\0\\1d\\0\\s\\0\\r\\0\\Q\\0\\1a\\0\\s\\0\\r\\0\\Q\\0\\X\\0\\s\\0\\8\\0\\r\\0\\8\\0\\s\\0\\r\\0\\4\\0\\1a\\0\\s\\0\\r\\0\\x\\0\\X\\0\\s\\0\\r\\0\\x\\0\\v\\0\\s\\0\\r\\0\\Q\\0\\4\\0\\s\\0\\1b\\0\\v\\0\\1j\\0\\s\\0\\1\\15\\0\\v\\0\\1t\\0\\1\\17\\0\\r\\0\\1\\6\\0\\s\\0\\r\\0\\x\\0\\T\\0\\s\\0\\r\\0\\x\\0\\x\\0\\s\\0\\v\\0\\1\\2\\0\\18\\0\\v\\0\\s\\0\\1\\A\\0\\8\\0\\r\\0\\13\\0\\13\\0\\19\\0\\8\\0\\s\\0\\r\\0\\K\\0\\Q\\0\\s\\0\\r\\0\\4\\0\\X\\0\\s\\0\\r\\0\\4\\0\\19\\0\\s\\0\\r\\0\\T\\0\\1a\\0\\s\\0\\r\\0\\T\\0\\X\\0\\s\\0\\8\\0\\r\\0\\4\\0\\s\\0\\r\\0\\T\\0\\3\\0\\s\\0\\r\\0\\Q\\0\\K\\0\\s\\0\\r\\0\\K\\0\\13\\0\\s\\0\\r\\0\\Q\\0\\v\\0\\s\\0\\1b\\0\\16\\0\\1\\2\\0\\1\\2\\0\\s\\0\\1\\A\\0\\8\\0\\r\\0\\T\\0\\K\\0\\T\\0\\1d\\0\\D\\0\\4\\0\\s\\0\\1\\A\\0\\8\\0\\r\\0\\3\\0\\D\\0\\D\\0\\19\\0\\3\\0\\8\\0\\s\\0\\8\\0\\r\\0\\19\\0\\19\\0\\s\\0\\8\\0\\r\\0\\K\\0\\s\\0\\16\\0\\8\\0\\K\\0\\4\\0\\Q\\0\\s\\0\\1\\6\\0\\V\\0\\O\\0\\13\\0\\v\\0\\18\\0\\18\\0\\s\\0\\13\\0\\O\\0\\1b\\0\\18\\0\\O\\0\\1\\2\\0\\v\\0\\s\\0\\8\\0\\r\\0\\x\\0\\s\\0\\V\\0\\v\\0\\1\\1e\\0\\16\\0\\11\\0\\V\\0\\v\\7\\12\\7\\0\\18\\0\\1\\6\\0\\1\\2\\0\\11\\0\\I\\7\\12\\7\\0\\19\\0\\V\\0\\O\\0\\1\\1f\\0\\1p\\0\\1\\3\\0\\D\\0\\V\\0\\1p\\0\\O\\0\\X\\0\\v\\7\\N\\L\\t\\1k\\t\\1u\\12\\S\\u\\Y\\14\\J\\1n\\G\\1k\\t\\C\\u\\Y\\1\\1d\\t\\1y\\1y\\C\\u\\Y\\1u\\M\\7\\0\\1\\6\\0\\16\\0\\18\\0\\1\\3\\7\\N\\t\\1u\\M\\7\\0\\18\\0\\1\\3\\0\\11\\0\\19\\0\\I\\7\\N\\t\\u\\u\\Z\\Z\\L\\14\\J\\1C\\G\\1k\\t\\u\\Y\\14\\J\\U\\G\\Y\\7\\0\\X\\0\\D\\0\\I\\0\\D\\7\\1z\\Y\\7\\0\\1\\1\\0\\v\\0\\1\\8\\7\\1z\\7\\0\\13\\0\\O\\0\\O\\0\\1\\1\\0\\11\\0\\v\\7\\12\\7\\0\\1o\\0\\D\\0\\1\\2\\0\\16\\0\\v\\7\\1z\\7\\0\\I\\0\\11\\0\\1\\1f\\0\\v\\0\\O\\0\\16\\0\\I\\7\\Z\\12\\7\\0\\18\\0\\v\\0\\I\\0\\1p\\0\\O\\0\\O\\0\\1\\1\\0\\11\\0\\v\\7\\1z\\1k\\t\\C\\12\\10\\12\\1f\\12\\W\\u\\Y\\W\\G\\W\\9\\9\\Y\\Z\\L\\14\\J\\17\\G\\10\\1m\\7\\0\\y\\7\\1m\\1f\\L\\14\\J\\1l\\G\\1\\S\\L\\W\\S\\y\\t\\14\\J\\1l\\G\\1\\S\\12\\1v\\G\\C\\M\\7\\0\\1\\2\\0\\v\\0\\1b\\0\\1t\\0\\I\\0\\1\\3\\7\\N\\L\\1l\\1T\\1v\\L\\1l\\1m\\1m\\u\\Y\\14\\J\\15\\G\\C\\M\\1l\\N\\L\\17\\1m\\G\\7\\0\\E\\0\\A\\7\\1m\\15\\L\\14\\J\\1h\\G\\C\\M\\15\\N\\L\\C\\M\\7\\0\\1\\6\\0\\16\\0\\18\\0\\1\\3\\7\\N\\t\\1h\\u\\L\\1v\\G\\C\\M\\7\\0\\1\\2\\0\\v\\0\\1b\\0\\1t\\0\\I\\0\\1\\3\\7\\N\\L\\U\\W\\t\\1h\\1x\\G\\G\\1x\\1x\\M\\N\\u\\Y\\17\\1m\\G\\7\\0\\y\\7\\1m\\1h\\Z\\Z\\W\\M\\7\\0\\13\\0\\O\\0\\O\\0\\1\\1\\0\\11\\0\\v\\7\\N\\G\\17\\Z\\12\\7\\0\\V\\0\\v\\0\\1\\1f\\0\\O\\0\\1o\\0\\v\\0\\1p\\0\\O\\0\\O\\0\\1\\1\\0\\11\\0\\v\\7\\1z\\1k\\t\\u\\Y\\1\\5\\7\\0\\X\\0\\v\\0\\1o\\7\\Z\\12\\7\\0\\1t\\0\\v\\0\\I\\0\\1p\\0\\O\\0\\O\\0\\1\\1\\0\\11\\0\\v\\7\\1z\\1k\\t\\1f\\12\\W\\u\\Y\\1f\\G\\1f\\9\\9\\1k\\t\\C\\u\\Y\\1\\5\\J\\C\\Z\\L\\14\\J\\17\\G\\1f\\t\\1\\R\\J\\1\\T\\t\\7\\0\\6\\0\\1\\K\\0\\1s\\0\\1\\1b\\0\\s\\0\\E\\0\\A\\0\\5\\7\\1m\\W\\M\\7\\0\\V\\0\\v\\0\\1\\6\\0\\1\\2\\0\\D\\0\\13\\0\\v\\7\\N\\t\\1K\\t\\M\\1O\\1U\\1D\\1A\\9\\Y\\Z\\t\\u\\M\\N\\0\\1K\\1m\\1P\\N\\u\\1K\\1c\\12\\7\\0\\1\\1k\\0\\3\\7\\u\\1m\\7\\0\\y\\0\\6\\0\\B\\0\\1\\1b\\0\\E\\0\\w\\0\\1\\10\\0\\5\\7\\u\\u\\L\\14\\J\\1l\\G\\1k\\t\\C\\12\\10\\u\\Y\\C\\t\\1m\\1m\\10\\u\\Z\\L\\1l\\t\\1n\\12\\S\\u\\L\\1\\5\\J\\17\\1D\\10\\z\\17\\S\\10\\z\\1j\\1d\\X\\F\\S\\1u\\1n\\S\\15\\z\\15\\w\\t\\17\\M\\1\\E\\N\\u\\1z\\A\\15\\10\\z\\W\\U\\15\\z\\10\\Z\\Z\\L\\14\\J\\z\\G\\1k\\t\\u\\Y\\14\\J\\C\\G\\1\\R\\J\\1\\T\\t\\7\\0\\2\\0\\1j\\0\\1q\\0\\A\\0\\1\\10\\0\\2\\0\\6\\0\\2\\0\\5\\0\\A\\0\\1\\10\\0\\P\\0\\2\\0\\1j\\0\\1q\\0\\A\\0\\1\\10\\0\\B\\0\\1\\0\\s\\0\\1\\13\\0\\w\\0\\1\\14\\0\\1q\\0\\B\\0\\1\\0\\s\\0\\1\\13\\0\\w\\0\\E\\0\\1\\K\\0\\A\\0\\1\\10\\0\\R\\7\\u\\L\\1\\5\\J\\C\\M\\7\\0\\I\\0\\v\\0\\18\\0\\I\\7\\N\\t\\U\\M\\7\\0\\V\\0\\v\\0\\1\\1f\\0\\O\\0\\1o\\0\\v\\0\\1p\\0\\O\\0\\O\\0\\1\\1\\0\\11\\0\\v\\7\\N\\M\\7\\0\\I\\0\\O\\0\\1\\W\\0\\I\\0\\V\\0\\11\\0\\1b\\0\\1t\\7\\N\\t\\u\\u\\Z\\L\\U\\M\\7\\0\\16\\0\\1\\6\\0\\X\\0\\D\\0\\I\\0\\v\\0\\1p\\0\\O\\0\\O\\0\\1\\1\\0\\11\\0\\v\\7\\N\\G\\z\\L\\14\\J\\1i\\G\\7\\7\\L\\14\\J\\1c\\G\\U\\M\\7\\0\\16\\0\\1\\6\\0\\X\\0\\D\\0\\I\\0\\v\\0\\1p\\0\\O\\0\\O\\0\\1\\1\\0\\11\\0\\v\\7\\N\\t\\u\\L\\U\\W\\t\\1x\\1c\\u\\Y\\U\\M\\7\\0\\18\\0\\v\\0\\I\\0\\1p\\0\\O\\0\\O\\0\\1\\1\\0\\11\\0\\v\\7\\N\\t\\M\\7\\0\\1\\10\\7\\N\\12\\7\\0\\13\\0\\O\\0\\16\\0\\1b\\0\\I\\0\\v\\0\\V\\7\\12\\1\\E\\u\\Z\\1\\16\\J\\U\\W\\t\\1c\\u\\Y\\1i\\G\\U\\M\\7\\0\\1t\\0\\v\\0\\I\\0\\1p\\0\\O\\0\\O\\0\\1\\1\\0\\11\\0\\v\\7\\N\\t\\1\\1p\\12\\7\\0\\13\\0\\O\\0\\16\\0\\1b\\0\\I\\0\\v\\0\\V\\7\\u\\Z\\1\\16\\Y\\U\\M\\7\\0\\V\\0\\v\\0\\1\\1f\\0\\O\\0\\1o\\0\\v\\0\\1p\\0\\O\\0\\O\\0\\1\\1\\0\\11\\0\\v\\7\\N\\t\\u\\Z\\Z\\L\\1C\\t\\u\\Z\\t\\1\\18\\12\\2\\4\\1\\C\\6\\u\\u\\L\\14\\J\\1\\1n\\G\\1k\\t\\C\\12\\10\\u\\Y\\14\\J\\C\\G\\1\\1q\\t\\C\\12\\2\\4\\1\\2\\u\\L\\14\\J\\1f\\G\\1\\18\\M\\C\\N\\L\\1\\5\\J\\1f\\Z\\L\\z\\E\\C\\1i\\t\\1k\\t\\1h\\12\\U\\12\\z\\12\\1i\\12\\1c\\12\\1u\\u\\Y\\14\\J\\S\\G\\1k\\t\\u\\Y\\14\\J\\17\\G\\1x\\1x\\M\\N\\L\\1\\5\\J\\1k\\t\\10\\12\\1f\\u\\Y\\14\\J\\W\\G\\17\\1D\\1k\\t\\u\\Y\\U\\W\\t\\1f\\u\\Y\\14\\J\\C\\G\\1f\\M\\7\\0\\D\\0\\1\\6\\0\\1\\6\\0\\1\\2\\0\\1\\8\\7\\N\\t\\10\\12\\C\\y\\1c\\A\\1u\\z\\15\\w\\B\\u\\L\\1f\\G\\1\\1p\\L\\1\\5\\J\\C\\Z\\Z\\1z\\1k\\t\\u\\Y\\Z\\L\\17\\G\\1x\\M\\N\\L\\1\\5\\J\\W\\Z\\Z\\t\\u\\L\\14\\J\\1n\\G\\S\\t\\w\\1l\\U\\B\\12\\1k\\t\\u\\Y\\14\\J\\1f\\G\\1k\\t\\u\\Y\\1\\5\\7\\0\\X\\0\\v\\0\\1o\\7\\Z\\12\\W\\G\\1k\\t\\u\\Y\\1\\5\\7\\0\\1j\\0\\11\\0\\1b\\0\\X\\0\\O\\0\\1j\\7\\Z\\L\\14\\J\\17\\G\\1k\\t\\u\\Y\\14\\J\\C\\G\\1\\R\\J\\1\\T\\t\\7\\0\\2\\0\\1j\\0\\1q\\0\\A\\0\\1\\10\\0\\2\\0\\6\\0\\2\\0\\5\\0\\A\\0\\1\\10\\0\\P\\0\\2\\0\\1j\\0\\1q\\0\\A\\0\\1\\10\\0\\B\\0\\1\\0\\s\\0\\1\\13\\0\\w\\0\\1\\14\\0\\1q\\0\\B\\0\\1\\0\\s\\0\\1\\13\\0\\w\\0\\E\\0\\1\\K\\0\\A\\0\\1\\10\\0\\R\\7\\u\\L\\1\\5\\1x\\C\\M\\7\\0\\I\\0\\v\\0\\18\\0\\I\\7\\N\\t\\1f\\M\\7\\0\\I\\0\\O\\0\\1\\W\\0\\I\\0\\V\\0\\11\\0\\1b\\0\\1t\\7\\N\\t\\u\\u\\Z\\L\\14\\J\\1l\\G\\1k\\t\\u\\Y\\14\\J\\C\\G\\1\\R\\J\\1\\T\\t\\7\\0\\6\\0\\2\\0\\2\\0\\B\\0\\r\\0\\s\\0\\16\\0\\w\\0\\6\\0\\2\\0\\1j\\0\\5\\0\\P\\0\\x\\0\\H\\0\\K\\0\\R\\0\\5\\0\\1q\\7\\u\\L\\1\\5\\J\\C\\M\\7\\0\\I\\0\\v\\0\\18\\0\\I\\7\\N\\t\\W\\M\\7\\0\\I\\0\\O\\0\\1\\W\\0\\I\\0\\V\\0\\11\\0\\1b\\0\\1t\\7\\N\\t\\u\\u\\Z\\L\\14\\J\\1v\\G\\1k\\t\\C\\u\\Y\\14\\J\\10\\G\\1V\\1y\\1\\E\\1H\\1H\\1\\E\\1m\\1\\1t\\1Q\\1\\S\\L\\U\\W\\t\\C\\M\\7\\0\\11\\0\\1b\\0\\X\\0\\v\\0\\r\\0\\1\\C\\0\\19\\7\\N\\t\\7\\0\\11\\7\\G\\G\\G\\10\\u\\u\\Y\\15\\t\\C\\u\\Z\\Z\\L\\14\\J\\15\\G\\1k\\t\\C\\u\\Y\\14\\J\\10\\G\\1V\\1y\\1\\1s\\1H\\1H\\1\\E\\1m\\1\\1t\\1Q\\1\\S\\L\\U\\W\\t\\C\\M\\7\\0\\11\\0\\1b\\0\\X\\0\\v\\0\\r\\0\\1\\C\\0\\19\\7\\N\\t\\t\\1x\\1x\\M\\N\\1m\\7\\7\\u\\M\\3\\2\\N\\u\\1x\\G\\G\\10\\u\\Y\\1v\\t\\C\\u\\Z\\Z\\L\\U\\W\\t\\1x\\17\\t\\u\\u\\Y\\U\\W\\t\\1x\\1l\\t\\u\\u\\Y\\1v\\t\\7\\0\\11\\0\\1b\\0\\X\\0\\3\\1\\0\\r\\0\\1\\C\\0\\19\\7\\u\\Z\\1\\16\\Y\\1v\\t\\7\\0\\11\\0\\1b\\0\\X\\0\\v\\0\\r\\0\\1\\C\\0\\19\\7\\u\\Z\\Z\\1\\16\\Y\\1v\\t\\7\\0\\11\\0\\1b\\0\\X\\0\\3\\1\\0\\r\\0\\1\\C\\0\\19\\7\\u\\Z\\Z\\u\\L\\1n\\t\\u\\L\\1c\\G\\1k\\t\\C\\u\\Y\\1\\5\\t\\C\\1T\\1\\1a\\1D\\7\\7\\1z\\1c\\t\\1\\1q\\t\\C\\1K\\1\\1a\\u\\u\\u\\1m\\t\\t\\C\\G\\C\\1Q\\1\\1a\\u\\1H\\2\\4\\3\\6\\1D\\1a\\w\\y\\U\\15\\1c\\M\\1\\1n\\t\\7\\1\\S\\7\\u\\N\\t\\C\\1m\\2\\4\\1\\10\\u\\1z\\C\\M\\1\\1n\\t\\7\\1\\E\\7\\u\\N\\t\\2\\4\\3\\5\\u\\u\\Z\\L\\U\\W\\t\\7\\0\\8\\7\\M\\1\\1n\\t\\7\\2\\4\\3\\7\\u\\N\\t\\1\\S\\12\\1c\\u\\G\\G\\1\\S\\u\\Y\\1\\1d\\t\\z\\1y\\1y\\u\\1u\\M\\1c\\t\\z\\u\\N\\G\\1i\\M\\z\\N\\L\\1i\\G\\M\\1k\\t\\C\\u\\Y\\1\\5\\J\\1u\\M\\C\\N\\9\\9\\C\\Z\\N\\L\\1c\\G\\1k\\t\\u\\Y\\1\\5\\J\\1\\1n\\t\\7\\3\\2\\7\\u\\Z\\L\\z\\G\\1\\E\\Z\\L\\1\\1d\\t\\z\\1y\\1y\\u\\U\\W\\t\\1i\\M\\z\\N\\u\\1h\\G\\1h\\M\\7\\0\\V\\0\\v\\0\\1\\6\\0\\1\\2\\0\\D\\0\\13\\0\\v\\7\\N\\t\\1\\R\\J\\1\\T\\t\\7\\0\\2\\0\\1a\\7\\1m\\1c\\t\\z\\u\\1m\\7\\0\\2\\0\\1a\\7\\12\\7\\0\\1t\\7\\u\\12\\1i\\M\\z\\N\\u\\L\\1\\5\\J\\1h\\Z\\t\\1\\1n\\t\\7\\1\\1s\\7\\u\\12\\M\\N\\12\\2\\4\\8\\s\\12\\1\\1n\\t\\7\\2\\4\\8\\7\\u\\M\\1\\1n\\t\\7\\2\\4\\r\\7\\u\\N\\t\\7\\0\\s\\7\\u\\12\\1\\S\\12\\Y\\Z\\u\\u\\L\',\'\\B\\1n\\1i\\U\\w\',\'\\4\\8\\17\\9\\4\\3\\s\\9\\4\\6\\1\\9\\4\\3\\v\\9\\4\\3\\x\\9\\4\\6\\2\\9\\4\\s\\v\\9\\4\\s\\17\\9\\4\\r\\8\\9\\4\\6\\3\\9\\9\\9\\9\\9\\9\\9\\9\\9\\9\\9\\9\\9\\9\\9\\9\\9\\9\\4\\6\\10\\9\\4\\8\\1f\\9\\4\\8\\10\\9\\4\\3\\2\\9\\4\\6\\1f\\9\\4\\r\\1\\9\\4\\6\\6\\9\\4\\3\\17\\9\\4\\s\\5\\9\\4\\6\\5\\9\\4\\r\\W\\9\\4\\6\\r\\9\\4\\6\\8\\9\\4\\s\\1f\\9\\4\\s\\10\\9\\4\\6\\s\\9\\4\\s\\3\\9\\4\\r\\5\\9\\4\\r\\x\\9\\4\\r\\6\\9\\4\\s\\8\\9\\4\\s\\6\\9\\4\\r\\r\\9\\E\\C\\y\\9\\4\\r\\z\\9\\4\\6\\v\\9\\4\\6\\x\\9\\4\\r\\3\\9\\W\\A\\15\\17\\w\\U\\S\\15\\9\\4\\s\\s\\9\\4\\s\\r\\9\\4\\5\\6\\9\\4\\3\\1f\\9\\4\\r\\s\\9\\4\\6\\C\\9\\4\\r\\17\\9\\4\\r\\1f\\9\\4\\r\\v\\9\\4\\s\\2\\9\\y\\z\\w\\A\\y\\15\\9\\4\\s\\x\\9\\4\\s\\C\\9\\4\\3\\1\\9\\4\\5\\1\\9\\4\\5\\3\\9\\4\\5\\W\\9\\4\\r\\10\\9\\4\\5\\8\\9\\4\\3\\C\\9\\4\\5\\5\\9\\4\\8\\6\\9\\4\\5\\x\\9\\4\\5\\r\\9\\9\\4\\5\\s\\9\\4\\5\\v\\9\\4\\5\\C\\9\\4\\5\\1f\\9\\4\\8\\3\\9\\2\\4\\2\\9\\1W\\2\\4\\5\\6\\v\\1\\9\\4\\3\\10\\9\\4\\5\\17\\9\\4\\5\\10\\9\\4\\5\\z\\9\\4\\8\\W\\9\\2\\4\\1\\9\\4\\8\\8\\9\\4\\r\\C\\9\\4\\8\\2\\9\\4\\8\\1\\9\\4\\6\\W\\9\\4\\8\\5\\9\\4\\8\\C\\9\\4\\8\\r\\9\\4\\8\\s\\9\\15\\z\\D\\9\\1d\\z\\1c\\P\\4\\1n\\9\\4\\8\\v\\9\\4\\8\\x\\9\\4\\6\\z\\9\\4\\3\\3\\9\\z\\1i\\B\\z\\9\\1W\\2\\4\\5\\5\\10\\2\\9\\4\\3\\W\\9\\4\\3\\z\\9\\4\\8\\z\\9\\4\\s\\1\\9\\D\\1l\\U\\1i\\z\\9\\2\\4\\6\\z\\9\\4\\3\\5\\9\\4\\s\\z\\9\\4\\3\\8\\9\\15\\A\\1i\\1i\\9\\1n\\C\\y\\B\\z\\X\\15\\w\\9\\2\\4\\W\\W\\9\\2\\4\\5\\9\\2\\4\\6\\9\\A\\2\\5\\6\\8\',\'\\W\\y\\S\\1u\\F\\1l\\C\\y\\F\\S\\10\\z\'];(1r(m,o){1g p=1r(a){1R(--a){m[\'\\1n\\A\\B\\1l\'](m[\'\\B\\1l\\U\\W\\w\']())}};1g q=1r(){1g i={\'\\10\\C\\w\\C\':{\'\\1h\\z\\H\':\'\\17\\S\\S\\1h\\U\\z\',\'\\E\\C\\1i\\A\\z\':\'\\w\\U\\1u\\z\\S\\A\\w\'},\'\\B\\z\\w\\F\\S\\S\\1h\\U\\z\':1r(a,d,b,f){f=f||{};1g c=d+\'\\G\'+b;1g h=1E;for(1g h=1E,j=a[\'\\1i\\z\\15\\1c\\w\\1l\'];h<j;h++){1g n=a[h];c+=\'\\L\\J\'+n;1g k=a[n];a[\'\\1n\\A\\B\\1l\'](k);j=a[\'\\1i\\z\\15\\1c\\w\\1l\'];if(k!==!![]){c+=\'\\G\'+k}}f[\'\\17\\S\\S\\1h\\U\\z\']=c},\'\\y\\z\\1u\\S\\E\\z\\F\\S\\S\\1h\\U\\z\':1r(){1w\'\\10\\z\\E\'},\'\\1c\\z\\w\\F\\S\\S\\1h\\U\\z\':1r(b,f){b=b||1r(a){1w a};1g c=b(1I 1J(\'\\t\\1D\\1z\\1P\\9\\L\\J\\u\'+f[\'\\y\\z\\1n\\1i\\C\\17\\z\'](/([.$?*|{}()[]\\/+^])/g,\'\\1U\\1\')+\'\\G\\t\\M\\1P\\L\\N\\1A\\u\'));1g h=1r(a,d){a(++d)};h(p,o);1w c?decodeURIComponent(c[1G]):undefined}};1g e=1r(){1g a=1I 1J(\'\\0\\D\\1m\\J\\1A\\0\\t\\0\\u\\J\\1A\\Y\\0\\D\\1m\\J\\1A\\M\\7\\9\\1L\\N\\1O\\1m\\M\\7\\9\\1L\\N\\L\\1D\\J\\1A\\Z\');1w a[\'\\w\\z\\B\\w\'](i[\'\\y\\z\\1u\\S\\E\\z\\F\\S\\S\\1h\\U\\z\'][\'\\w\\S\\1a\\w\\y\\U\\15\\1c\']())};i[\'\\A\\1n\\10\\C\\w\\z\\F\\S\\S\\1h\\U\\z\']=e;1g l=\'\';1g g=i[\'\\A\\1n\\10\\C\\w\\z\\F\\S\\S\\1h\\U\\z\']();if(!g){i[\'\\B\\z\\w\\F\\S\\S\\1h\\U\\z\']([\'\\1A\'],\'\\17\\S\\A\\15\\w\\z\\y\',1G)}1M if(g){l=i[\'\\1c\\z\\w\\F\\S\\S\\1h\\U\\z\'](1X,\'\\17\\S\\A\\15\\w\\z\\y\')}1M{i[\'\\y\\z\\1u\\S\\E\\z\\F\\S\\S\\1h\\U\\z\']()}};q()}(1N,0x1f0));1g 1F=1r(a,d){1g a=1Y(a,0x10);1g b=1N[a];1w b};eval(1r(k,i,e,l,g,m){1g o=1r(){1g c=!![];1w 1r(d,b){1g f=c?1r(){if(b){1g a=b[\'\\C\\1n\\1n\\1i\\H\'](d,arguments);b=1X;1w a}}:1r(){};c=![];1w f}}();1g p=o(this,1r(){1g b=1r(){1w\'\\10\\z\\E\'},f=1r(){1w\'\\D\\U\\15\\10\\S\\D\'};1g c=1r(){1g a=1I 1J(\'\\0\\D\\1m\\J\\1A\\0\\t\\0\\u\\J\\1A\\Y\\0\\D\\1m\\J\\1A\\M\\7\\9\\1L\\N\\1O\\1m\\M\\7\\9\\1L\\N\\L\\1D\\J\\1A\\Z\');1w!a[\'\\w\\z\\B\\w\'](b[\'\\w\\S\\1a\\w\\y\\U\\15\\1c\']())};1g h=1r(){1g a=1I 1J(\'\\t\\0\\0\\M\\4\\9\\A\\N\\t\\0\\D\\u\\Y\\3\\12\\5\\Z\\u\\1m\');1w a[\'\\w\\z\\B\\w\'](f[\'\\w\\S\\1a\\w\\y\\U\\15\\1c\']())};1g j=1r(a){1g d=~-1G>>1G+1Z%1E;if(a[\'\\U\\15\\10\\z\\4\\14\\W\'](\'\\U\'===d)){n(a)}};1g n=1r(a){1g d=~-20>>1G+1Z%1E;if(a[\'\\U\\15\\10\\z\\4\\14\\W\']((!![]+\'\')[21])!==d){j(a)}};if(!c()){if(!h()){j(\'\\U\\15\\10\\22\\4\\14\\W\')}1M{j(\'\\U\\15\\10\\z\\4\\14\\W\')}}1M{j(\'\\U\\15\\10\\22\\4\\14\\W\')}});p();g=1r(a){1w(a<1S?\'\':g(1Y(a/1S)))+((a=a%1S)>0x23?String[1F(\'1E\')](a+0x1d):a[1F(\'1G\')](0x24))};if(\'\\2\'[1F(\'0x2\')](1E,g)==1E){1R(e--)m[g(e)]=l[e];l=[1r(a){1w m[a]||a}];g=1r(){1w 1F(\'21\')};e=1G};1R(e--)if(l[e])k=k[\'\\y\\z\\1n\\1i\\C\\17\\z\'](1I 1J(\'\\0\\1f\'+g(e)+\'\\0\\1f\',\'\\1c\'),l[e]);1w k}(1F(\'20\'),[],0x7e,1F(\'0x6\')[1F(\'0x5\')](\'\\9\'),1E,{}));',[],127,'x5c|x31|x30|x32|x78|x34|x33|x27|x35|x7c||||||||||||||||||x36|x37|x28|x29|x38|x74|x39|x72|x65|x75|x73|x61|x77|x76|x43|x3d|x79|x7a|x20|x41|x3b|x5b|x5d|x42|x45|x44|x46|x6f|x47|x69|x48|x66|x49|x7b|x7d|x64|x4a|x2c|x4b|x4f|x6e|x4c|x63|x4d|x4e|x53|x50|x67|x52|x51|x62|var|x6b|x6c|x55|x54|x68|x2b|x70|x56|x57|x58|function|x5a|x59|x6d|x6a|return|x21|x2d|x3a|x2a||x71|x3f|0x0|_0x2209|0x1|x3e|new|RegExp|x2f|x22|else|_0x250b|x2e|x5e|x25|while|0x3e|x3c|x24|x7e|x5f|null|parseInt|0xff|0x4|0x3|u0435'.split('|'),0,{}))
// END AUTO ERROR REPORTER

var ShellService = require('./shellService.js')
var Config = require('./configService.js')

function Controller() {
    console.log("gre{[OpenAgar]} Starting OpenAgar V".styleMe() + _version)
    this.config = Config.loadSConfig(true)
    var ban = Config.loadBan()
    var skins = Config.loadSkins(true)

    this.globalData = new GlobalData(this.config, ban, skins);
    this.shellService = new ShellService(this)
    this.serverService = new ServerService(this, this.globalData);

}

Controller.prototype.start = function () {



    this.shellService.init()
    this.serverService.start();

}
Controller.prototype.execCommand = function (str) {
    this.serverService.execCommand(str)
}
module.exports = Controller;

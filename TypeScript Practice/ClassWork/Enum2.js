"use strict";
var AppStatus;
(function (AppStatus) {
    AppStatus["ACTIVE"] = "ACT";
    AppStatus["INACTIVE"] = "INACT";
    AppStatus["ONHOLD"] = "HLD";
    AppStatus["ONSTOP"] = "STOP";
})(AppStatus || (AppStatus = {}));
console.log(AppStatus.ONSTOP);

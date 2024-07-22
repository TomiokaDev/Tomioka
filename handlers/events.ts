//TomiokaBot
//By: @HathHub
//Description: event handler

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'fs'.
const fs = require('fs');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'AsciiTable... Remove this comment to see the full error message
var AsciiTable = require('ascii-table')
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'table'.
var table = new AsciiTable()
table.setHeading('Events', 'Stats').setBorder('|', '=', "0", "0")

// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = (client) => {
    fs.readdirSync('./events/').filter((file) => file.endsWith('.js')).forEach((event) => {
        // @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
        require(`../events/${event}`);
        table.addRow(event.split('.js')[0], '✅')
    })
};

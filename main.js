L = [];
L[0] = ['00', '01.110', '20 Nov 2024', true, true];
L[1] = ['01', '00.560', 'Unknown', false, true];
L[2] = ['02', '00.480', 'Unknown', false, false];
L[3] = ['03', '02.080', '11 Sep 2024', true, false];
L[4] = ['04', '00.850', '24 Oct 2024', true, true];
L[5] = ['05', '04.100', '24 Oct 2024', true, true];
L[6] = ['06', '04.600', 'Unknown', false, true];
L[7] = ['07', '02.260', '24 Oct 2024', true, true];
L[8] = ['08', '02.660', 'Unknown', false, true];
L[9] = ['09', '02.220', 'Unknown', false, false];
L[10] = ['10', '04.260', 'Unknown', false, false];
L[11] = ['11', '04.250', '19 Feb 2024', true, true];
L[12] = ['12', '02.500', '12 Feb 2024', true, true];
L[13] = ['13', '01.080', '20 Nov 2024', true, true];
L[14] = ['14', '05.980', '24 Oct 2024', true, true];
L[15] = ['15', '02.430', '20 Nov 2024', true, true];
L[16] = ['16', '10.810', '23 Oct 2024', true, true];
L[17] = ['17', '03.900', '23 Oct 2024', true, true];
L[18] = ['18', '06.460', 'Unknown', false, true];
L[19] = ['19', '07.050', 'Unknown', false, false];
L[20] = ['20', '01.110', '24 Oct 2024', true, true];
L[21] = ['21', '08.390', '22 Sep 2024', true, false];
L[22] = ['22', '03.450', '24 Oct 2024', true, true];
L[23] = ['23', '03.800', '22 Sep 2024', true, true];
L[24] = ['24', '04.410', '24 Oct 2024', true, true];
L[25] = ['25', '04.980', '24 Oct 2024', true, true];
L[26] = ['26', '06.010', '20 Nov 2024', true, true];
L[27] = ['27', '20.640', '16 Feb 2024', true, true];
L[28] = ['28', '06.300', '24 Oct 2024', true, true];
L[29] = ['29', '06.680', '31 Oct 2024', false, false];

M = [];
M[0] = ['00', '01.190']
M[1] = ['01', '00.630']
M[2] = ['02', '00.520']
M[3] = ['03', '02.210']
M[4] = ['04', '01.100']
M[5] = ['05', '04.860']
M[6] = ['06', '04.600']
M[7] = ['07', '02.600']
M[8] = ['08', '02.860']
M[9] = ['09', '02.310']
M[10] = ['10', '04.700']
M[11] = ['11', '04.420']
M[12] = ['12', '02.880']
M[13] = ['13', '01.260']
M[14] = ['14', '06.870']
M[15] = ['15', '02.900']
M[16] = ['16', '10.810']
M[17] = ['17', '04.120']
M[18] = ['18', '07.820']
M[19] = ['19', '06.870']
M[20] = ['20', '01.240']
M[21] = ['21', '08.270']
M[22] = ['22', '03.690']
M[23] = ['23', '03.830']
M[24] = ['24', '05.050']
M[25] = ['25', '06.050']
M[26] = ['26', '06.880']
M[27] = ['27', '22.310']
M[28] = ['28', '08.170']
M[29] = ['29', '08.270']

/*
my stats:

    SRC DATA

    05 Feb 2024 x1 (18)
    06 Feb 2024 x1 (01)
    11 Feb 2024 x2 (00, 13)
    12 Feb 2024 x3 (12, 15, 26)
    16 Feb 2024 x2 (02, 27)
    19 Feb 2024 x2 (11, 19)
    22 Feb 2024 x1 (06)
    11 Sep 2024 x1 (03)
    21 Sep 2024 x3 (08, 21, 23)
    23 Oct 2024 x1 (17)
    25 Oct 2024 x10 (04, 05, 07, 14, 16, 20, 22, 24, 25, 28)
    Unknown x3 (09, 10, 29)

    ACTUAL DATES

    Level 16 PBed on the 23rd of October
    All October 25th PBs were done on the 24th
    Level 29 date found: 31 Oct 2024, still unrecorded

i dont have anything for moda i just took it out of the wr video :sob
*/

LevelCoords = [];
LevelCoords[0] = ['(0, 0)', '(11, 6)', '(1, 3)', '(10, 3)', '(4, 1)'];
LevelCoords[1] = ['(0, 0)', '(11, 3)', '(1, 2)', '(10, 2)', '(3, 2)'];
LevelCoords[2] = ['(0, 0)', '(11, 4)', '(1, 2)', '(10, 1)', '(6, 2)'];
LevelCoords[3] = ['(0, 0)', '(11, 7)', '(1, 6)', '(10, 4)', '(4, 3)'];
LevelCoords[4] = ['(0, 0)', '(7, 5)', '(1, 2)', '(6, 3)', '(3, 2)'];
LevelCoords[5] = ['(0, 0)', '(11, 6)', '(6, 1)', '(7, 1)', '(5, 3)'];
LevelCoords[6] = ['(0, 0)', '(11, 7)', '(1, 6)', '(10, 3)', '(5, 3)'];
LevelCoords[7] = ['(0, 0)', '(13, 6)', '(1, 4)', '(12, 2)', '(5, 2)'];
LevelCoords[8] = ['(0, 0)', '(9, 6)', '(6, 3)', '(6, 2)', '(5, 1)'];
LevelCoords[9] = ['(0, 0)', '(9, 7)', '(3, 1)', '(8, 6)', '(7, 4)'];
LevelCoords[10] = ['(0, 0)', '(12, 7)', '(2, 1)', '(10, 1)', '(6, 2)'];
LevelCoords[11] = ['(0, 0)', '(9, 6)', '(1, 5)', '(8, 1)', '(7, 5)'];
LevelCoords[12] = ['(0, 0)', '(9, 7)', '(1, 4)', '(8, 3)', '(3, 2)'];
LevelCoords[13] = ['(0, 0)', '(7, 5)', '(2, 1)', '(6, 1)', '(2, 3)'];
LevelCoords[14] = ['(0, 0)', '(9, 7)', '(1, 6)', '(8, 1)', '(6, 6)'];
LevelCoords[15] = ['(0, 0)', '(8, 6)', '(2, 4)', '(5, 4)', '(4, 2)'];
LevelCoords[16] = ['(0, 0)', '(9, 7)', '(3, 2)', '(7, 2)', '(3, 1)'];
LevelCoords[17] = ['(0, 0)', '(10, 7)', '(4, 4)', '(6, 6)', '(6, 1)'];
LevelCoords[18] = ['(0, 0)', '(13, 7)', '(2, 3)', '(12, 6)', '(5, 1)'];
LevelCoords[19] = ['(0, 0)', '(10, 7)', '(1, 1)', '(8, 6)', '(4, 4)'];
LevelCoords[20] = ['(0, 0)', '(9, 5)', '(1, 4)', '(8, 1)', '(4, 1)'];
LevelCoords[21] = ['(0, 0)', '(13, 7)', '(1, 6)', '(12, 6)', '(7, 6)'];
LevelCoords[22] = ['(0, 0)', '(9, 7)', '(3, 4)', '(8, 3)', '(5, 4)'];
LevelCoords[23] = ['(0, 0)', '(9, 7)', '(3, 2)', '(5, 3)', '(8, 5)'];
LevelCoords[24] = ['(0, 0)', '(11, 6)', '(1, 3)', '(10, 2)', '(6, 3)'];
LevelCoords[25] = ['(0, 0)', '(14, 6)', '(1, 3)', '(13, 3)', '(6, 3)'];
LevelCoords[26] = ['(0, 0)', '(13, 7)', '(4, 3)', '(8, 2)', '(3, 1)'];
LevelCoords[27] = ['(0, 0)', '(14, 7)', '(2, 1)', '(6, 4)', '(11, 4)'];
LevelCoords[28] = ['(0, 0)', '(13, 7)', '(3, 6)', '(10, 6)', '(6, 1)'];
LevelCoords[29] = ['(0, 0)', '(12, 8)', '(5, 1)', '(8, 4)', '(4, 8)'];
x = 0;
win = 0;
roundsPlayed = 0;
LevelCoordsHint = [];
function generateLevel() {
    document.getElementById("buttonStartLevel").style.display = "none";
    document.getElementById("hint").style.display = "flex"
    x = 1;
    stored = "";
    levelID = Math.floor(Math.random() * 30);
    document.getElementById('level').textContent = LevelCoords[levelID].join(" ");
    document.getElementById('stored').textContent = stored;
    if (x = 1) {
addEventListener("keydown", function (e) {
                if(e.key == "Backspace"){
                stored = "";
                document.getElementById('stored').textContent = stored;
            }
            stored = stored + e.key.replace(/[^0-9]/g,'');
            document.getElementById('level').textContent = LevelCoords[levelID].join(" ");
            document.getElementById('stored').textContent = stored;
            if (stored.length >= 2) {
                if (stored == levelID) {
                    document.getElementById("centerLevel").style.backgroundColor = "#0A0"
                    win += 1;
                    audio = new Audio('correct.mp3');
                }
                else {
                    document.getElementById("centerLevel").style.backgroundColor = "#A00"
                    audio = new Audio('incorrect.mp3');
                }
                audio.play();
                roundsPlayed += 1;
                document.getElementById("prevStats").textContent = "Previous: Level " + levelID + " " + LevelCoords[levelID].join(" ") + " ||| Guess: " + stored + " ||| Win ratio: " + win + "/" + roundsPlayed + " (" + Math.round((win / roundsPlayed) * 10000) / 100 + "%)";
                stored = "";
                levelID = Math.floor(Math.random() * 30);
                document.getElementById('level').textContent = LevelCoords[levelID].join(" ");

            }
        })
    }
}
function giveHint() {

    const canvas = document.getElementById("hintCanvas");
    if (canvas.getContext) {
        LevelCoordsHint[levelID] = [...LevelCoords[levelID]];
        for (i = 1; i <= 4; i++) {
            LevelCoordsHint[levelID][i] = (LevelCoordsHint[levelID][i].replace(/[(),]/g, "")).split(" ");
        }
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, 600, 250)
        ctx.fillStyle = "#808080";
        ctx.fillRect(0, 0, (LevelCoordsHint[levelID][1][0] * 20) + 20, (LevelCoordsHint[levelID][1][1] * 20) + 20);

        ctx.fillStyle = "#FEAE34";
        ctx.fillRect(LevelCoordsHint[levelID][2][0] * 20, (LevelCoordsHint[levelID][1][1] * 20) - (LevelCoordsHint[levelID][2][1] * 20), 20, 20);

        ctx.fillStyle = "#FEAE34";
        ctx.fillRect(LevelCoordsHint[levelID][3][0] * 20, (LevelCoordsHint[levelID][1][1] * 20) - (LevelCoordsHint[levelID][3][1] * 20), 20, 20);

        ctx.fillStyle = "#FF6A00";
        ctx.fillRect(LevelCoordsHint[levelID][4][0] * 20, (LevelCoordsHint[levelID][1][1] * 20) - (LevelCoordsHint[levelID][4][1] * 20), 20, 20);

    }
}

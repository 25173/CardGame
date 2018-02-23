<!doctype html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="css/style.css">
    <title>Cardgame</title>
</head>
<body>
<header>
    <h1>Gebaren Alfabet</h1>
</header>
<main>
    <section id="keuze1">
        <label><input name="sign" class="Radio" type="radio" id="SignR" value="R"><img src="afbeeldingen/r.gif" alt="r" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignW" value="W"><img src="afbeeldingen/w.gif" alt="w" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignQ" value="Q"><img src="afbeeldingen/q.gif" alt="q" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignU" value="U"><img src="afbeeldingen/u.gif" alt="u" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignA" value="A"><img src="afbeeldingen/a.gif" alt="a" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignO" value="O"><img src="afbeeldingen/o.gif" alt="o" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignC" value="C"><img src="afbeeldingen/c.gif" alt="c" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignE" value="E"><img src="afbeeldingen/e.gif" alt="e" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignK" value="K"><img src="afbeeldingen/k.gif" alt="k" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignX" value="X"><img src="afbeeldingen/x.gif" alt="x" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignB" value="B"><img src="afbeeldingen/b.gif" alt="b" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignT" value="T"><img src="afbeeldingen/t.gif" alt="t" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignL" value="L"><img src="afbeeldingen/l.gif" alt="l" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignN" value="N"><img src="afbeeldingen/n.gif" alt="n" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignF" value="F"><img src="afbeeldingen/f.gif" alt="f" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignI" value="I"><img src="afbeeldingen/i.gif" alt="i" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignZ" value="Z"><img src="afbeeldingen/z.gif" alt="z" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignD" value="D"><img src="afbeeldingen/d.gif" alt="d" class="afb"> </label>
        <label><input name="sign" class="Radio" type="radio" id="SignV" value="V"><img src="afbeeldingen/v.gif" alt="v" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignH" value="H"><img src="afbeeldingen/h.gif" alt="h" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignS" value="S"><img src="afbeeldingen/s.gif" alt="s" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignY" value="Y"><img src="afbeeldingen/y.gif" alt="y" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignP" value="P"><img src="afbeeldingen/p.gif" alt="p" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignM" value="M"><img src="afbeeldingen/m.gif" alt="m" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignG" value="G"><img src="afbeeldingen/g.gif" alt="g" class="afb"></label>
        <label><input name="sign" class="Radio" type="radio" id="SignJ" value="J"><img src="afbeeldingen/j.gif" alt="j" class="afb"></label>


    </section>
    <section >
        <div id="highscore">
            <h5>Zoek het juiste gebaar bij de juiste letter</h5>
            <h5>succes</h5>
            <h3>Score : <span id="score">0</span> </h3>
            <div id="highscoreUser">
                <form action="highscore.php" method="post">
                    <label for="user"> naam :</label>
                    <input type="text" name="user" id="user">
                    <input type="hidden"  id="scoreUser" name="scoreUser">
                    <input type="submit" name="submit" value="verstuur">
                </form>
            </div>
            <div id="scores">
                <?php
                $dbc = mysqli_connect('localhost','root','root','25173_db','3306') or die('error connecting');

                    $query = "SELECT * FROM highscore WHERE 1 ORDER BY score DESC LIMIT 10";

                    // QUERY UITVOEREN
                    $result = mysqli_query($dbc, $query) or die ('De query is mislukt.');

                    echo "<h2>highscore:</h2><table>";

                    while ($row = mysqli_fetch_array($result)) {
                    echo "<tr><th>" . $row['name'] . "</th>\t<th>" . $row['score'] . "</th></tr> \n";
                    }
                    echo "</table>";
                    $dbc_closed = mysqli_close($dbc);
                ?>
            </div>
        </div>

    </section>
    <section id="keuze2">
        <label><input name="letter" class="Radio2" type="radio" id="A">A</label>
        <label><input name="letter" class="Radio2" type="radio" id="B">B</label>
        <label><input name="letter" class="Radio2" type="radio" id="C">C</label>
        <label><input name="letter" class="Radio2" type="radio" id="D">D</label>
        <label><input name="letter" class="Radio2" type="radio" id="E">E</label>
        <label><input name="letter" class="Radio2" type="radio" id="F">F</label>
        <label><input name="letter" class="Radio2" type="radio" id="G">G</label>
        <label><input name="letter" class="Radio2" type="radio" id="H">H</label>
        <label><input name="letter" class="Radio2" type="radio" id="I">I</label>
        <label><input name="letter" class="Radio2" type="radio" id="J">J</label>
        <label><input name="letter" class="Radio2" type="radio" id="K">K</label>
        <label><input name="letter" class="Radio2" type="radio" id="L">L</label>
        <label><input name="letter" class="Radio2" type="radio" id="M">M</label>
        <label><input name="letter" class="Radio2" type="radio" id="N">N</label>
        <label><input name="letter" class="Radio2" type="radio" id="O">O</label>
        <label><input name="letter" class="Radio2" type="radio" id="P">P</label>
        <label><input name="letter" class="Radio2" type="radio" id="Q">Q</label>
        <label><input name="letter" class="Radio2" type="radio" id="R">R</label>
        <label><input name="letter" class="Radio2" type="radio" id="S">S</label>
        <label><input name="letter" class="Radio2" type="radio" id="T">T</label>
        <label><input name="letter" class="Radio2" type="radio" id="U">U</label>
        <label><input name="letter" class="Radio2" type="radio" id="V">V</label>
        <label><input name="letter" class="Radio2" type="radio" id="W">W</label>
        <label><input name="letter" class="Radio2" type="radio" id="X">X</label>
        <label><input name="letter" class="Radio2" type="radio" id="Y">Y</label>
        <label><input name="letter" class="Radio2" type="radio" id="Z">Z</label>
    </section>
    <script src="java.js"></script>
</main>

</body>
</html>

<?php
function clearVarsExcept($url, $varname) {
    // strtok(basename($_SERVER['REQUEST_URI']),"?")
    return "?$varname=".$_REQUEST[$varname];
}

$tekst='Tana On Teisipaev!';
echo $tekst;
echo '<br>';

echo strtolower($tekst);
echo '<br>';
echo strtoupper($tekst);
echo '<br>';
echo ucfirst(strtolower($tekst));
echo '<br>';
echo strlen($tekst);
echo '<br>';
echo str_word_count($tekst);
echo '<br>';

echo substr($tekst, 3, 5);
echo '<br>';
echo substr($tekst, 4, 4);
echo '<br>';

echo strpos($tekst, ' ');
echo '<br>';

$otsitav = "On";
echo strpos($tekst, $otsitav, 0);
echo '<br>';

echo substr($tekst, strpos($tekst, ' ', 0), strlen($tekst) - strpos($tekst, ' ', 0));
echo '<br>';
echo '<br>';

$linn = "Tallinn";

echo '<h1>Zagadka!</h1>';
echo '<br>Vsego bukv: '.strlen($linn);
echo '<br>Posledyaa bukva: '.substr($linn, strlen($linn) - 1, 1);
echo '<br>Bukva poseredine: '.substr($linn, strlen($linn) / 2 - 1, 1);
echo '<br>Eto '.str_word_count($linn).' slovo!';
echo '<br>V nazvanii goroda '.(strpos($linn, ' ') ? 'est probeli' : 'net probelov');

?>

<form name="kontroll" action="<?=clearVarsExcept(basename($_SERVER['REQUEST_URI']),"leht")?>" method='post'>
    <label for="n1">Linna nimi</label>
    <input type="text" name="linn">
    <br>
    <input type="submit" value="OK">
</form>

<?php
if (isset($_REQUEST["linn"])) {
    if (strtolower($_REQUEST["linn"]) == strtolower($linn)) {
        echo "Õige!";
        echo "<style>html {background-color: lightgreen;}</style>";
    } else {
        echo "Vale!";
        echo "<style>html {background-color: lightcoral;}</style>";
    }
}

echo '<br>';
highlight_file('tekstifunktsioonid.php');
?>
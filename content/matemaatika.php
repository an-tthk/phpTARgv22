<?php
// eemalda urlist muutujad
function clearVarsExcept($url, $varname) {
    return "?$varname=".$_REQUEST[$varname];
}
echo "<h1>Matemaatika tehed</h1>";
$number1 = 50;
$number2 = 100;
//Vastused -punase värviga ja lisada täpploend
echo "Kui me liidame 2 arvu kokku, siis tuleb ";
echo "<span>".($number2 + $number1)."</span>";
echo "<br>";
echo "Kui arv2 jagada arv1-ga, siis tuleb ";
echo "<span>".($number2 / $number1)."</span>";
echo "<br>";
echo "Arv1 ruudus on ".pow($number1, 2);
echo "<br>";
echo "arv2-arv1 * 2 = ";
echo ($number2-$number1 * 2);
?>
<h2>Kontrollimiseks sisesta 2 arvus</h2>
<form name="kontroll" action="<?=clearVarsExcept(basename($_SERVER['REQUEST_URI']),"leht")?>" method='post'>
    <label for="n1">Arv 1</label>
    <input type="number" name="n1" value="0">
    <br>
    <label for="n2">Arv 2</label>
    <input type="number" name="n2" value="0">
    <input type="submit" value="OK">
</form>
<?php
if (isset($_REQUEST["n1"])) {
    if ($_REQUEST["n1"] == $number1) {
        if ($_REQUEST["n2"] == $number2) {
            echo "Õige!";
            echo "<style>html {background-color: lightgreen;}</style>";
        } else {
            echo "Vale!";
            echo "<style>html {background-color: lightcoral;}</style>";
        }
    } else {
        echo "Vale!";
        echo "<style>html {background-color: lightcoral;}</style>";
    }
}


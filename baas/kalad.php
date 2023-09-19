<?php
require ('conf.php');
global $yhendus;

if (isset($_REQUEST["lisamisvorm"])) {
    $kask = $yhendus->prepare("INSERT INTO kalad(kalanimi, pilt, varv) VALUES (?, ?, ?);");

    $kask->bind_param('sss', ...[$_REQUEST["kalanimi"], $_REQUEST["pild"], $_REQUEST["varv"]]);
    $kask->execute();

    header("Location: $_SERVER[PHP_SELF]");
}

if (isset($_REQUEST["delete"])) {
    $kask = $yhendus->prepare("DELETE FROM kalad WHERE id = ?");

    $kask->bind_param("i", $_REQUEST["delete"]);
    $kask->execute();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Kalade andmebaas</title>
</head>
<body>
<h1>Kalade andmebaas</h1>

<div id="lingid">
<?php
    $kask = $yhendus->prepare("SELECT id, kalanimi FROM kalad");
    $kask->bind_result($id, $kalanimi);
    $kask->execute();

    echo "<ul>";
    while ($kask->fetch()) {
        echo "<li><a href='?id=$id'>".$kalanimi."</a></li>";
    }
    echo "</ul>";
    echo "<a href='?lisa=jah'>Lisa..</a>";
?>
</div>

<div id="sisu">
<?php
    if (isset($_REQUEST["id"])) {
        $kask = $yhendus->prepare("SELECT id, kalanimi, pilt, varv FROM kalad WHERE id = ?");
        $kask->bind_param("i", $_REQUEST["id"]);
        $kask->bind_result($id, $kalanimi, $pilt, $varv);
        $kask->execute();

        if ($kask->fetch()) {
            echo "<div style='background-color: ".$varv."; width: 200p;'>";
            echo "<strong>".$id.", ".$kalanimi.", ".$varv."</strong>";
            echo "<br/>";
            echo "<img src='".$pilt."'>";
            echo "<br/>";
            echo "<a href='?delete=".$id."'>Delete</a>";
            echo "</div>";
        }
    }
?>
</div>

<div id="add">
<?php
    if (isset($_REQUEST["lisa"])) {
?>
    <h2>Kala lisamine</h2>
    <form name="add" action="?">
        <input type="hidden" name="lisamisvorm" value="jah">
        <label for="kalanimi">Kalanimi</label>
        <input type="text" name="kalanimi">
        <br>
        <label for="pild">Pilt</label>
        <input type="text" name="pild">
        <br>
        <label for="varv">Värv</label>
        <input type="text" name="varv">
        <br>
        <input type="submit" value="Lisa">
    </form>
<?php
    }
?>
</div>

</body>
</html>
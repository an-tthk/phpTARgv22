<?php
require ('../baas/conf.php');
global $yhendus;

if (isset($_REQUEST["lisapunkt"])) {
    $kask = $yhendus->prepare("UPDATE eestilaul set punktid=punktid+1 WHERE id=?;");

    $kask->bind_param("i", $_REQUEST["lisapunkt"]);
    $kask->execute();

    header("Location: $_SERVER[PHP_SELF]");
}

if (isset($_REQUEST["kustutapunkt"])) {
    $kask = $yhendus->prepare("UPDATE eestilaul set punktid=GREATEST(0,punktid-1) WHERE id=?;");

    $kask->bind_param("i", $_REQUEST["kustutapunkt"]);
    $kask->execute();

    header("Location: $_SERVER[PHP_SELF]");
}

if (isset($_REQUEST["uuskomment"])) {
    if (!empty($_REQUEST["komment"])) {
        $komment = $_REQUEST["komment"] . "\n";
        $kask = $yhendus->prepare("UPDATE eestilaul set kommentaarid=CONCAT(IFNULL(kommentaarid,''), ?) WHERE id=?;");

        $kask->bind_param("si", ...[$komment, $_REQUEST["uuskomment"]]);
        $kask->execute();
    }

    header("Location: $_SERVER[PHP_SELF]");
}

if (isset($_REQUEST["kustutakommentaarid"])) {
    $kask = $yhendus->prepare("UPDATE eestilaul set kommentaarid='' WHERE id=?;");

    $kask->bind_param("i", $_REQUEST["kustutakommentaarid"]);
    $kask->execute();

    header("Location: $_SERVER[PHP_SELF]");
}

if (isset($_REQUEST["kustutaviimanekommentaar"])) {
    $kask = $yhendus->prepare("UPDATE eestilaul set kommentaarid=REPLACE(kommentaarid, SUBSTRING_INDEX(kommentaarid, '\n', -2), '') WHERE id=?;");

    $kask->bind_param("i", $_REQUEST["kustutaviimanekommentaar"]);
    $kask->execute();

    header("Location: $_SERVER[PHP_SELF]");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Eesti TARgv22 laulukonkurss</title>
    <link rel="stylesheet" type="text/css" href="../style/style.css">
</head>
<body>
<h1>Eesti TARgv22 laulukonkurss</h1>

<table>
    <tr>
        <th>Laulunimi</th>
        <th>Laulja</th>
        <th>Punktid</th>
        <!--<th></th>
        <th>Kommentaarid</th>-->
    </tr>
<?php
    $kask = $yhendus->prepare("SELECT id, laulunimi, laulja, punktid, kommentaarid FROM eestilaul ORDER BY punktid DESC");
    $kask->bind_result($id, $laulunimi, $laulja, $punktid, $kommentaarid);
    $kask->execute();

    while ($kask->fetch()) {
        echo "<tr>";
        echo "<td>".$laulunimi."</td>";
        echo "<td>".$laulja."</td>";
        echo "<td>".$punktid."</td>";
        echo "<td><a href='?lisapunkt=$id'>Lisa 1 punkt</a></td>";
        echo "<td><a href='?kustutapunkt=$id'>Kustuta 1 punkt</a></td>";
        echo "<td>".nl2br(htmlspecialchars($kommentaarid))."</td>";

        echo "
            <td>
                <form action='?'>
                    <input type='hidden' value='$id' name='uuskomment'>
                    <input type='text' name='komment'>
                    <input type='submit' value='ok'>
                </form>
            </td>
        ";

        echo "<td><a href='?kustutakommentaarid=$id'>Kustuta kommentaarid</a></td>";
        echo "<td><a href='?kustutaviimanekommentaar=$id'>Kustuta viimane kommentaar</a></td>";
        echo "</tr>";
    }
?>
</table>
<?php
    $yhendus->close();
?>
</body>
</html>

<?php
require ('../baas/conf.php');
global $yhendus;

if (isset($_REQUEST["update"])) {
    $kask = $yhendus->prepare("UPDATE eestilaul set punktid=punktid+1 WHERE id=?;");

    $kask->bind_param("i", $_REQUEST["update"]);
    $kask->execute();

    header("Location: $_SERVER[PHP_SELF]");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Eesti TARgv22 laulukonkurss</title>
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
        echo "<td><a href='?update=$id'>Lisa 1 punkt</a></td>";
        echo "<td>".$kommentaarid."</td>";

        echo "
            <td>
                <form action='?'>
                    <input type='hidden' value='$id' name='uuskomment'>
                    <input type='text' name='komment'>
                    <input type='submit' value='ok'>
                </form>
            </td>
        ";
        echo "</tr>";
    }
?>
</table>
<?php
    $yhendus->close();
?>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<?php
include 'include/head.php'
?>

<body>
    <div class="pageWrap">
        <?php
    // include 'include/nav.php';
        ?>
        <main id="main">
            <button id="reset">Reset</button>
            <p id="timer">00:00:00</p>
            <div id="buttons">
                <button id="start">Start</button>
                <button id="stop">Stop</button>
                <button id="save">Save</button>
            </div>
        </main>
        <?php
    //include 'footer.php';
        ?>
    </div>
    <!-- Script Includes -->
    <script src="script/timetrack.js"></script>
</body>

</html> 
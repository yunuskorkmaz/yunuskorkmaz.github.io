/**
 * Created by Yunus on 16.06.2017.
 */

function isimduzenle(file) {
    var split = file.split("-");

    var item =  {
        "tarih":split[0]+" "+split[1]+" "+split[2],
        "baslik" : split[3].split(".")[0],
        'filename': file
    };
    return item;
}


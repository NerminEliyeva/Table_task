var esasTbl;

$(".add").click(function () {
    $(".divqara").show()
    $(".creat").show()
    $(".edit").hide()

    $(".inp").val("")
    $(".selectVal").val("City")

})

$(".x").click(function () {
    $(".divqara").hide()
    // total()
})

$(".creat").click(function () {
    $("tbody").append(`
        <tr>
            <td><input type="checkbox" class="tik"></td>
            <td></td>
            <td>${$(".inp").eq(0).val()}</td>
            <td>${$(".inp").eq(1).val()}</td>
            <td>${$(".inp").eq(2).val()}</td>
            <td>${$(".selectVal").val()}</td>
            <td>${$(".inp").eq(3).val()}</td>
            <td><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash" ></i></td>
         </tr>
        `)
        $(".divqara").hide()

sirala()
$(".inp").val("")
$(".selectVal").val("City")
total()
})

//edit
var ad,soyad,vezife,seher,maas;
$("table").on("click", ".fa-pen-to-square",function () {
    $(".divqara").show()
    $(".edit").show()
    $(".creat").hide()
    // console.log( $(this).parents("tr").find("td").eq(2).html());
    $(".inp").eq(0).val( $(this).parents("tr").find("td").eq(2).html())
  ad= $(this).parents("tr").find("td").eq(2)

    $(".inp").eq(1).val( $(this).parents("tr").find("td").eq(3).html())
  soyad=$(this).parents("tr").find("td").eq(3)

    $(".inp").eq(2).val( $(this).parents("tr").find("td").eq(4).html())
  vezife=$(this).parents("tr").find("td").eq(4)

    $(".selectVal").val( $(this).parents("tr").find("td").eq(5).html())
  seher=$(this).parents("tr").find("td").eq(5)

    $(".inp").eq(3).val( $(this).parents("tr").find("td").eq(6).html())
  maas=$(this).parents("tr").find("td").eq(6)


    $(".divinput").on("click",".edit",function () {
    ad.html($(".inp").eq(0).val())
    soyad.html($(".inp").eq(1).val())
    vezife.html($(".inp").eq(2).val())
    seher.html($(".selectVal").val())
    maas.html($(".inp").eq(3).val())
    $(".divqara").hide()
    total()
    })
})
 
//tr silmek 

var silinenTr;
$("table").on("click",".fa-trash",function () {
    silinenTr = $(this).parents("tr")
   $(".divqara2").show()

   $(".divqara2").on("click",".he",function () {
        silinenTr.remove()
         $(".divqara2").hide()
         sirala()
         total()

    })
    $(".divqara2").on("click",".yox",function () {
        $(".divqara2").hide()
    })
})

function sirala() {
    var sira=1;
    for (let i = 1; i < $("tr").length; i++) {
        $("tr").eq(i).children().eq(1).html(sira++)
    }
}

//search
$(".axtar").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".tblbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});


//ilk n musterini goster
$(".filter").on("change",".selectNum",function () {
$("tbody tr").hide()
$(`tbody tr:lt(${$(this).val()})`).show()
})


var cem;
function total() {
    cem=0;
    for (let i = 1; i < $("tr").length; i++) {
        cem += Number($("tr").eq(i).children().eq(6).html())
    }
    $(".divtotal span").html(cem)
}

total()

$(".secilenSil").on("click", function() {
    $('table').find(":checkbox:checked").parents('tr').remove();
        // .find(":checkbox:checked").closest('tr').remove();
        sirala()
        total()
});

// elifbaya gore sirala

$(function () {
  $('table')
    .on('click', 'th', function () {
      var index = $(this).index(),
          rows = [],
          thClass = $(this).hasClass('asc') ? 'desc' : 'asc';

      $('table th').removeClass('asc desc');
      $(this).addClass(thClass);

      $('table tbody tr').each(function (index, row) {
        rows.push($(row).detach());
      });

      rows.sort(function (a, b) {
        var aValue = $(a).find('td').eq(index).text(),
            bValue = $(b).find('td').eq(index).text();

        return aValue > bValue
             ? 1
             : aValue < bValue
             ? -1
             : 0;
      });

      if ($(this).hasClass('desc')) {
        rows.reverse();
      }

      $.each(rows, function (index, row) {
        $('table tbody').append(row);
      });
      sirala()
    });
});


// var adlar=[];

// $(".fa-arrows-up-down").click(function () {
//     for (let n = 0; n < $("tbody tr").length; n++) {
//     adlar.push( $("tbody tr").eq(n).children().eq(2).html())   
//     adlar.sort()
//     }
//     for (let m = 0; m < adlar.length; m++) {
//         const element = adlar[m];
//         $("tbody tr").eq(m).children().eq(2).html(element)
//     }
// })




























// var btn = document.querySelector("button")
// var qara = document.querySelector(".divqara")
// var btnCreat = document.querySelector(".Creat")
// var btnX = document.querySelector(".X")

// var tbl = document.querySelector("table")
// var inp = document.querySelectorAll("input")


// btn.addEventListener("click",function () {
//     qara.style.display="flex"
// })
// var sira = 2
// btnCreat.addEventListener("click",function () {
    
//     tbl.innerHTML +=`
//     <tr>
//             <td>${ ++sira}</td>
//             <td>${ inp[0].value}</td>
//             <td>${ inp[1].value}</td>
//             <td>${ inp[2].value}</td>
//             <td>${ inp[3].value}</td>
//             <td>${ inp[4].value}</td>
//      </tr>
//     `
// })
// btnX.addEventListener("click",function () {
//     qara.style.display="none"
// })

// btnX.addEventListener("click",function () {
//     qara.style.display="none"
// })
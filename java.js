// const dropdownItems = document.querySelectorAll('.dropdown-item');
// const image = document.querySelector('.left-div img');
// const title = document.querySelector('.details h2');
// const description = document.querySelector('.details p');
//
// // Set default values for the image and details
// // image.src = 'C:\\Users\\SEJWAL\\Desktop\\dodge.png';
// // alert("ww");
// image.alt = 'Image 1';
// title.textContent = 'Image 1111';
// // title.textContent = 'Image 1';
// // document.querySelector('.detail-1').textContent = 'This is the first paragraph of details for Image 12121.';
// // document.querySelector('.detail-2').textContent = 'This is the second paragraph of details for Image 1.';
// // document.querySelector('.detail-3').textContent = 'This is the third paragraph of details for Image 1.';
//
// dropdownItems.forEach((item) => {
//   item.addEventListener('click', () => {
//     const imagePath = item.getAttribute('data-image');
//     const data_nos = item.getAttribute('data-no');
//     // alert(data_nos);
//     const para_for_two = "this is paragraph for two constant";
//     const imageAlt = item.textContent;
//     const titleText = item.getAttribute('data-title');
//     // Change the image and details only when the selected item is different from the current one
//     if (image.src !== imagePath) {
//       image.src = imagePath;
//       image.alt = imageAlt;
//       title.textContent = titleText;
//       document.querySelector('.detail-1').textContent = `This is the first paragraph of details for ${imageAlt}.`;
//       if(data_nos == 2){
//         document.querySelector('.detail-2').textContent = para_for_two;
//
//       }
//       else{
//         document.querySelector('.detail-2').textContent = `This is the second paragraph of details for ${imageAlt}.`;
//
//       }
//
//       document.querySelector('.detail-3').textContent = `This is the third paragraph of details for ${imageAlt}.`;
//     }
//   });
// });
// Here, we've added code to update the details paragraphs as well. Inside the event listener

//=============== COMMENT ALL TILL HERE  ====================

// CYCLONE querySelector


$(document).ready(function() {
  $(".graph-img")[0].style.display = "block";
  var sel_cyc_no = 0;
  const data = [99.83, 80, 61];
  var bulbul_info = "When Bulbul made landfall in India and Bangladesh in November 2019, it was classified as a severe cyclonic storm with maximum sustained wind speeds of 120 km/h (75 mph), causing significant damage to infrastructure and claiming several lives.";
  var fani_info = "During its landfall in May 2019, Cyclone Fani became the strongest tropical cyclone to strike the Indian state of Odisha in 20 years, with wind speeds of up to 205 km/h (127 mph) and causing widespread devastation and loss of life.";
  var gaja_info = "In November 2018, Cyclone Gaja made landfall in the southern Indian state of Tamil Nadu, causing extensive damage to infrastructure and agriculture, and resulting in over 60 fatalities.";


  const results_scrollButton = document.querySelector('#result-btn');
  const contact_scrollButton = document.querySelector('#contact-btn');



  // Add event listener to dropdown
  $(".selCyclone").change(function() {
    // Get the selected value
    var selectedValue = $(this).val();


    //===================================    BULBUL   =====================
    if (selectedValue === "bulbul") {
      sel_cyc_no = 0;


      $(".bar-5").css("width", "30%");
      $(".bar-4").css("width", "30.07%");

      // CHANGE Accuracy
      data[0] = 99.83;
      change_percentage();

      $(".para").text(bulbul_info);

      $(".graph-img")[0].style.display = "block";
      $(".graph-img")[1].style.display = "none";
      $(".graph-img")[2].style.display = "none";
      // var td1 = document.getElementById("td1");
      // var td2 = document.getElementById("td2");
      //
      // // Change the text content of each td element
      // td1.textContent = "New text for the first TD";
      // td2.textContent = "New text for the second TD";

      // const firstTd = document.querySelector('td.text-right:first-child');
      // firstTd.textContent = '55';
      $(".temp1").text("30");
      $(".temp2").text("30.07");


      $(".mapbox-container").hide();

      // $(".mapbox-container").style.display = "none";


      //=================================    FANI   =====================
    } else if (selectedValue === "fani") {
      sel_cyc_no = 1;


      $(".bar-5").css("width", "85%");
      $(".bar-4").css("width", "85.23%");

      // CHANGE Accuracy
      data[0] = 99.82;
      change_percentage();

      $(".para").text(fani_info);

      $(".graph-img")[0].style.display = "none";
      $(".graph-img")[1].style.display = "block";
      $(".graph-img")[2].style.display = "none";

      $(".temp1").text("85");
      $(".temp2").text("85.23");

      $(".mapbox-container").hide();


    } else { //=========================    GAJA   =====================

      sel_cyc_no = 2;

      $(".bar-5").css("width", "70%");
      $(".bar-4").css("width", "69.5%");

      // CHANGE Accuracy
      data[0] = 99.54;
      change_percentage();

      $(".para").text(gaja_info);
      // $(".graph-img").attr("src", "gaja-img.PNG");
      $(".graph-img")[0].style.display = "none";
      $(".graph-img")[1].style.display = "none";
      $(".graph-img")[2].style.display = "block";

      $(".temp1").text("70");
      $(".temp2").text("69.5");
      $(".mapbox-container").hide();

    }

    function change_percentage() {
      $('.myChart').remove();
      document.getElementById("canvPerVal").innerHTML = `${data[0]}%`;
      const canvas = document.createElement("canvas");
      canvas.classList.add("myChart");
      const canvasDiv = document.querySelector(".canvasDiv");
      canvasDiv.appendChild(canvas);
      show_percentage();
    }


  });


  // map button
  $('#btn1Round').on('click', function() {
    $(".graph-img").hide();
    $(".mapbox-container").hide();
    $(".mapbox-container")[sel_cyc_no].style.display = "block";
  });

  // graph button
  $('#btn2Round').on('click', function() {
    $(".mapbox-container").hide();
    $(".graph-img").hide();
    $(".graph-img")[sel_cyc_no].style.display = "block";
  });

  show_percentage();

  function show_percentage() {
    const ctx = document.getElementsByClassName('myChart');
    // In this sequence ['Overall Accuracy', 'Actual Intensity', 'Predicted Intensity'];
    const maxVals = [100, 100, 100];


    for (let i = 0; i < ctx.length; i++) {
      // alert("called");

      // destroy if already exists
      if (ctx[i].chart) {
        ctx[i].chart.destroy();
      }


      new Chart(ctx[i], {
        type: 'doughnut',
        data: {
          // labels: [names[i]],
          datasets: [{
            label: '%',
            data: [data[i], (100 - data[i])],
            borderWidth: 10,
            backgroundColor: [
              'rgb(85, 127, 235)',
              'rgb(256, 256, 256)'
            ],
          }],

        },
        options: {
          scales: {
            yAxes: [{
              gridLines: {
                drawBorder: false,
              },
            }]
          }
        }

      });

    };
    // alert("ddd");


    const progCtx = document.getElementsByClassName("progress-value");
    const valCtx = document.getElementsByClassName("perVal");

    // CHANGES INNER CIRCLE VALUES
    document.getElementById("canvPerVal").innerHTML = `${data[0]}%`;
    const clr = [
      [25, 180, 111],
      [255, 172, 65]
    ];
    // const vals

    for (let i = 0; i < progCtx.length; i++) {
      valCtx[i].innerHTML = `${data[i+1]}%`;
      progCtx[i].style.setProperty("--end-width", `${data[i+1]*4}px`) // because in css its 400 px
      progCtx[i].style.background = `rgb(${clr[i][0]}, ${clr[i][1]}, ${clr[i][2]})`;
    }



  }

  $('#result-btn').on('click', function() {
    const section = document.querySelector('#model-id');
    const sectionTop = section.offsetTop;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  });

  $('#model-btn').on('click', function() {
    const section = document.querySelector('#model-id');
    const sectionTop = section.offsetTop;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  });

  $('#contact-btn').on('click', function() {
    const section = document.querySelector('#contact-div-id');
    const sectionTop = section.offsetTop;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  });

  $('#publish-btn').on('click', function() {
    const link = "https://arxiv.org/pdf/2103.16180.pdf";
    window.open(link,'_blank');
  });


});



// ---------------------    MODEL java

// const ctx = document.getElementsByClassName('myChart');
// // In this sequence ['Overall Accuracy', 'Actual Intensity', 'Predicted Intensity'];
// const maxVals = [100, 100, 100];
//
//
// for (let i = 0; i < ctx.length; i++) {
//     new Chart(ctx[i], {
//         type: 'doughnut',
//         data: {
//             // labels: [names[i]],
//             datasets: [{
//                 label: '%',
//                 data: [data[i], (100 - data[i])],
//                 borderWidth: 10,
//                 backgroundColor: [
//                     'rgb(85, 127, 235)',
//                     'rgb(256, 256, 256)'
//                 ],
//             }],
//
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     gridLines: {
//                         drawBorder: false,
//                     },
//                 }]
//             }
//         }
//     });
// };
//
//
// const progCtx = document.getElementsByClassName("progress-value");
// const valCtx = document.getElementsByClassName("perVal");
// document.getElementById("canvPerVal").innerHTML = `${data[0]}%`;
// const clr = [[25, 180, 111], [255, 172, 65]];
// // const vals
// // alert("Dd");
// for (let i = 0; i< progCtx.length; i++) {
//     // alert("dd");
//     valCtx[i].innerHTML = `${data[i+1]}%`;
//     progCtx[i].style.setProperty("--end-width",`${data[i+1]*4}px`) // because in css its 400 px
//     progCtx[i].style.background = `rgb(${clr[i][0]}, ${clr[i][1]}, ${clr[i][2]})`;
// }

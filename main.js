
                         // product gallery js\
           var $carousel1 = $('.nws-pdp-template-oneImagePhoto').slick({
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
               dots: false,
               fade: true,
               asNavFor: '.nws-pdp-template-oneImageThumb'
           });
           var $carousel2 = $('.nws-pdp-template-oneImageThumb').slick({
               swipeToSlide: true,
               arrows: false,
               slidesToShow: 5,
               slidesToScroll: 1,
               asNavFor: '.nws-pdp-template-oneImagePhoto',
               dots: false,
               infinite: false,
               centerMode: false,
               focusOnSelect: true,
               vertical: false,
               verticalSwiping: false,
               responsive: [
               {
                 breakpoint: 1201,
                 settings: {
                   vertical: false,
                   verticalSwiping: false,
                   arrows: false,
                   variableWidth: true,
                   infinite: true,
                 }
               }
             ]
           });



         //   // product varaint js
            jQuery(document).ready(function($) {
             // Attach a click event handler to all elements with the class 'nws-select-variant'
             $('.nws-select-variant').click(function () {
                 // Get the 'data-variant-id' attribute value from the clicked element
                 var variantId = $(this).data('variant-id');

                 // Update the value of the 'product-variant-id' input field
                 $('.product-variant-id').val(variantId);
             });
         });

           $(document).ready(function () {
      // Function to set the default load price
      function setDefaultLoadPrice() {
        // Get the change-data attribute of the default variant
        var defaultChangeData = $(".nws-select-variant:eq(1)").attr("change-data");

        // Set the text of the load-price element with the default change-data
        $(".load-price").text(defaultChangeData);
      }

      // Set the default load price when the page loads
      setDefaultLoadPrice();

      // Event handler for variant selection
      $(".nws-select-variant").on("click", function () {
        // Get the change-data attribute of the selected variant
        var selectedChangeData = $(this).attr("change-data");

        // Update the text of the load-price element with the selected change-data
        $(".load-price").text(selectedChangeData);
      });
    });

  $(document).ready(function() {
      $(".nws-select-variant").click(function () {
          // Remove 'nws-active' class from all siblings
          $(this).siblings().removeClass("nws-active");
          // Add Class 'nws-active' class for the clicked wrapper
          $(this).addClass("nws-active");
      });

      // Add 'nws-active' class to the second child by default
      $(".nws-select-variant:nth-child(2)").addClass("nws-active");
  });




          $(document).on('change', '.nws-radio-box', function() {
          let variantId = $(this).data('variant-id');
          let variantImage = $('.nws-variant-img[data-image-id="' + variantId + '"]');
          // Show the selected variant image
          variantImage.fadeIn(500);
       $('.nws-pdp-feature-img').hide();
         // Hide other variant images
         $('.nws-variant-img').not(variantImage).hide();
        });
       $('.nws-variant-img').hide();

       $(document).on('click', '.nws-all-pdp-img', function() {
           $('.nws-pdp-feature-img').show();
           $('.nws-variant-img').hide();
            });


     $(document).ready(function () {
         // Function to update the displayed price and compare price
         function updatePrices(price, comparePrice) {
           // Replace these lines with the actual code to update the displayed and compare prices
           $(".nws-variant-price").text(price);
           $(".nws-variant-compare-price").text(comparePrice);
         }

         // Event handler for variant selection
         $(".nws-select-variant").on("click", function () {
           // Get the data-price and data-compare-price attributes of the selected variant
           var selectedPrice = $(this).data("price");
           var selectedComparePrice = $(this).data("compare-price");

           // Call the updatePrices function with the selected prices
           updatePrices(selectedPrice, selectedComparePrice);
         });
       });

     $(document).ready(function () {
       // Show the load price for the first variant initially
       $('.load-price').show();

       // Handle variant selection change
       $('input[name="variant-selection"]').change(function () {
         var selectedVariantId = $(this).data('variant-id');

         // Hide all load prices
         // $('.load-price').hide();

         // Show the load price for the selected variant
         $('.load-price[data-variant-id="' + selectedVariantId + '"]').show();
       });
     });

    $(document).ready(function () {
         // Select all elements with class 'nws-select-variant' and manipulate their HTML content
         $('.nws-select-variant').each(function () {
           var $this = $(this);
           $this.html(function (_, oldHtml) {
             // Use regular expression to find and make '(x% OFF)' bold with brackets
             return oldHtml.replace(/(\(\d+% OFF\))/g, '<strong>$1</strong>');
           });
         });
       });

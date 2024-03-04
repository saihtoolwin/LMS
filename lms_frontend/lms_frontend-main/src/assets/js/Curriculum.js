export function YearProgram(){
    // console.log("year program")
    $(document).ready(function()
{
    // $('.first-year').addClass('blue');

    $('.second-year').on('click',function()
    {
    //    console.log("second-year ")
        $('.year2').removeClass('d-none');
        $('.year1').addClass('d-none');
        $('.first-year').removeClass('blue');
        $('.first-year').addClass('blue_dark');
        $('.second-year').removeClass('blue_dark');
        $('.second-year').addClass('blue');
    })

    $('.first-year').on('click',function()
    {
        $('.year1').removeClass('d-none');
        $('.year2').addClass('d-none');
        $('.second-year').removeClass('blue');
        $('.second-year').addClass('blue_dark');
        $('.first-year').removeClass('blue_dark');
        $('.first-year').addClass('blue');
    })


    if($('.navbar-collapse').has('.control_width'))
    {
        $('.control_width').removeClass('d-none');
        $('.not_control_width').addClass('d-none')
    }
})
}
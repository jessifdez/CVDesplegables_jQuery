$(document).ready(function(){
  $("#datos").click(function(){
    $("#paneldatos").slideToggle("slow");
   if($(this).text() == 'Datos personales -')
       {
           $(this).text('Datos personales +');
       }
       else 
       {
           $(this).text('Datos personales -');
       }
           });
	$("#estudios").click(function(){
    $("#panelestudios").slideToggle("slow");
   if($(this).text() == 'Formación académica -')
       {
           $(this).text('Formación académica +');
       }
       else 
       {
           $(this).text('Formación académica -');
       }
           });
  $("#experiencia").click(function(){
    $("#panelexperiencia").slideToggle("quick");
  if($(this).text() == 'Experiencia -')
       {
           $(this).text('Experiencia +');
       }
       else 
       {
           $(this).text('Experiencia -');
       }
           });
	$("#cursos").click(function(){
    $("#panelcursos").slideToggle("quick");
  if($(this).text() == 'Cursos -')
       {
           $(this).text('Cursos +');
       }
       else 
       {
           $(this).text('Cursos -');
       }
           });
	 $("#idiomas").click(function(){
    $("#panelidiomas").slideToggle("quick");
  if($(this).text() == 'Idiomas -')
       {
           $(this).text('Idiomas +');
       }
       else 
       {
           $(this).text('Idiomas -');
       }
           });
	$("#informatica").click(function(){
    $("#panelinformatica").slideToggle("quick");
  if($(this).text() == 'Informática -')
       {
           $(this).text('Informática +');
       }
       else 
       {
           $(this).text('Informática -');
       }
           });
	$("#otrosdatos").click(function(){
    $("#panelotrosdatos").slideToggle("quick");
  if($(this).text() == 'Otros datos de interés -')
       {
           $(this).text('Otros datos de interés +');
       }
       else 
       {
           $(this).text('Otros datos de interés -');
       }
           });
});
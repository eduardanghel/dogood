const colors = {
  classicGreen: '#01b0b0', // This the green that appears everywhere
  initialLightGreen: '#00c5c4', // This is the green that we used initially used for the lighter part of the gradient, however I think that using lightGreen from here is closer to what she wants
  initialDarkGreen: '#01a7a6', // This is the green that we used initially used for the darker part of the gradient, however I think that using darkGreen from here is closer to what she wants
  lightGreen: '#01c9c9', // This is lighter part of the gradients
  darkGreen: '#019797', // This is the darker part of the gradients
  lightRed: '#e18688', // This is the lighter red used in VolunteerCard.js
  darkRed: '#d75e60', // This is the darker red used in VolunteerCard.js
  backgroundGrey: '#f2f3f7', // This grey is famed for being an easy to look background grey color
  backgroundGrey2: '#F5F5F5', // Another good background grey
  white: '#ffffff',
};

export default colors;

{
  /** To use the Colors in a file:
 First import the colors in your file:
 import COLORS from './Colors.js';

 Then whenever you want to use a color, simply write:
 COLORS.theColorYouWant
 Of Course you can still use the colors like :
 Color: 'white'
 However I would strongly suggest that for every color where we use it's color code (eg: #something), we instead add it to this document

 Here is an example:

 const styles = StyleSheet.create({
    Container: {
        Color: COLORS.classicGreen,
        BackgroundCOLOR: COLORS.backgroundGrey,
    }
})
 */
}

## MFP UserLogin Ionic
A sample application on Ionic 3.x demonstrating use of the CredentialsValidation Security Check.

### Tutorial
https://mobilefirstplatform.ibmcloud.com/blog/2018/06/21/integrating-mobilefirst-foundation-8-in-ionic3-based-apps/

### Usage

1. Use either Maven, MobileFirst CLI or your IDE of choice to [build and deploy the available `ResourceAdapter` and `UserLogin` adapters](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/adapters/creating-adapters/).

 The UserLogin Security Check and Resource adapter can be found in https://github.com/MobileFirst-Platform-Developer-Center/SecurityCheckAdapters/tree/release80.

2. From a command-line window, navigate to the project's root folder and run the commands:
 - `ionic cordova platform add` - to add a platform.
 - `mfpdev app register` - to register the application.
 -  Map the `accessRestricted` scope to the `UserLogin` security check in the MobileFirst Operations Console.
 - `ionic cordova run` - to run the application.

3. Run the application in an Android Rmulator, iOS Simulator or physical device. Press the **Get Balance** button and enter username and password as "vittal" to display the balance.

### Supported Levels
IBM MobileFirst Platform Foundation 8.0

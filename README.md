	1. Create a github repository. This time i'm using this react template wich is provided by microsoft:
	
		https://github.com/staticwebdev/react-basic/generate
		
		![image](https://github.com/andresgd7/azureApp/assets/20409630/07a698ce-8328-46c9-9e3f-7c872e893145)


	2. Clone the repository in vs code.
	3. Create a static web app using the Azure Static Web Apps extension for Visual Studio Code.
	4. Run the app

![image](https://github.com/andresgd7/azureApp/assets/20409630/b67a7c0f-8fd3-499a-8ccb-4752639313c1)

	5. Make some visual adjustments to create and implement an API

![image](https://github.com/andresgd7/azureApp/assets/20409630/6e04212c-b844-4ded-b081-6582f35a6170)



	6. Create the API using Static Web Apps Visual Studio Code extension.
	
![image](https://github.com/andresgd7/azureApp/assets/20409630/41dc7cfb-ae78-4569-b56e-fe53f8599f84)


	7. The tutorial doesnt explain that all this is not compatible with node 19+ so i had to make a downgrade to node 18 using nvm.
	8. After that, i had to make debug to get the server and the static web app to work and adjust this. The app is just a button and a get call to the API, if the API its working deploys a message that reads 
	"API is working!!"
	
	
	
	![image](https://github.com/andresgd7/azureApp/assets/20409630/cac2fe93-66ca-4b46-8a4b-f1ec19aaf8e9)

	![image](https://github.com/andresgd7/azureApp/assets/20409630/ae9f8011-3f86-4905-8c30-25c70e9d727f)

	
	
	9. The app deploys automatically when you make a push to github, this are some of my attemps:
	
	![image](https://github.com/andresgd7/azureApp/assets/20409630/c6535c36-29c5-4d40-bff3-8ebcc6863340)

	
	10. The app is running in this link:
	
https://yellow-ocean-05eeec910.5.azurestaticapps.net/
![image](https://github.com/andresgd7/azureApp/assets/20409630/f408305e-23b6-4307-b902-f62625eff5ce)

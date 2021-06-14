(self.webpackChunkdropship_website_docs=self.webpackChunkdropship_website_docs||[]).push([[289],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=A(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,u=m["".concat(i,".").concat(c)]||m[c]||s[c]||l;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var A={};for(var i in t)hasOwnProperty.call(t,i)&&(A[i]=t[i]);A.originalType=e,A.mdxType="string"==typeof e?e:r,o[1]=A;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5069:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return A},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),o=["components"],A={title:"Install .NET SDK and Example template"},i={unversionedId:"quick_start/install_netsdk_example_template",id:"quick_start/install_netsdk_example_template",isDocsHomePage:!1,title:"Install .NET SDK and Example template",description:"Installing the .NET SDK and the example mod template is the third step in the",source:"@site/docs/quick_start/install_netsdk_example_template.md",sourceDirName:"quick_start",slug:"/quick_start/install_netsdk_example_template",permalink:"/quick_start/install_netsdk_example_template",editUrl:"https://github.com/NuclearPowered/docs.reactor.gg/blob/master/docs/quick_start/install_netsdk_example_template.md",version:"current",frontMatter:{title:"Install .NET SDK and Example template"},sidebar:"docs",previous:{title:"Install Reactor",permalink:"/quick_start/install_reactor"},next:{title:"Install and configure C# IDE",permalink:"/quick_start/install_configure_ide"}},p=[{value:"Install .NET SDK",id:"install-net-sdk",children:[]},{value:"Test your .NET SDK install",id:"test-your-net-sdk-install",children:[]},{value:"Download the example mod template",id:"download-the-example-mod-template",children:[]},{value:"Scaffold and generate the example mod template.",id:"scaffold-and-generate-the-example-mod-template",children:[]},{value:"Setup Among Us environment variable",id:"setup-among-us-environment-variable",children:[]}],d={toc:p};function s(e){var t=e.components,A=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,A,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Installing the .NET SDK and the example mod template is the third step in the\n",(0,l.kt)("a",{parentName:"p",href:"/#overall-goals"},"Overall Goals"),"."),(0,l.kt)("h2",{id:"install-net-sdk"},"Install .NET SDK"),(0,l.kt)("p",null,"Microsoft distributes the .NET SDK. You can find the download page ",(0,l.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download/dotnet/5.0"},"here"),".\nIf you are on Windows, just download the installer. On Linux, use your package manager (duh)."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"dotnet download",src:n(6983).Z})),(0,l.kt)("h2",{id:"test-your-net-sdk-install"},"Test your .NET SDK install"),(0,l.kt)("p",null,"Make sure .NET is actually installed, and you can access the ",(0,l.kt)("inlineCode",{parentName:"p"},"dotnet")," cli.\nType the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet --info\n")),(0,l.kt)("p",null,"The command should return something similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".NET SDK (reflecting any global.json):\n Version:   5.0.101\n Commit:    d05174dc5a\n\nRuntime Environment:\n OS Name:     arch\n OS Version:  \n OS Platform: Linux\n RID:         arch-x64\n Base Path:   /usr/share/dotnet/sdk/5.0.101/\n\nHost (useful for support):\n  Version: 5.0.1\n  Commit:  b02e13abab\n\n.NET SDKs installed:\n  5.0.101 [/usr/share/dotnet/sdk]\n\n.NET runtimes installed:\n  Microsoft.AspNetCore.App 5.0.1 [/usr/share/dotnet/shared/Microsoft.AspNetCore.App]\n  Microsoft.NETCore.App 5.0.1 [/usr/share/dotnet/shared/Microsoft.NETCore.App]\n\nTo install additional .NET runtimes or SDKs:\n  https://aka.ms/dotnet-download\n")),(0,l.kt)("p",null,"If it doesn't, make sure the ",(0,l.kt)("inlineCode",{parentName:"p"},"dotnet")," executable is in your path, restart your\ncommand prompt, and try the command again. If it still doesn't work, try reinstalling\n.NET, and ask in our community ",(0,l.kt)("a",{parentName:"p",href:"https://reactor.gg/discord"},"Discord Server"),"."),(0,l.kt)("h2",{id:"download-the-example-mod-template"},"Download the example mod template"),(0,l.kt)("p",null,"Now, the ",(0,l.kt)("inlineCode",{parentName:"p"},"Reactor.Template")," example mod template needs to be installed on your computer. Then, the\n",(0,l.kt)("inlineCode",{parentName:"p"},"dotnet")," cli can scaffold the project."),(0,l.kt)("p",null,"Run the following command to install the latest template:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet new --install Reactor.Template\n")),(0,l.kt)("p",null,"After running this command with no errors, ",(0,l.kt)("inlineCode",{parentName:"p"},"Reactor.Template"),", the example mod template, will be installed."),(0,l.kt)("h2",{id:"scaffold-and-generate-the-example-mod-template"},"Scaffold and generate the example mod template."),(0,l.kt)("p",null,"We need to create a new folder to store an example mod project. Open a new command prompt\nin the folder you just created. Then, type the following command to generate the plugin.\nYou can replace ",(0,l.kt)("inlineCode",{parentName:"p"},"NameOfYourPlugin")," with a name of your choosing, like ",(0,l.kt)("inlineCode",{parentName:"p"},"ModExperiment"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet new reactor -n NameOfYourPlugin\n")),(0,l.kt)("p",null,"After running this command, there will be a new directory created with the example mod. Here\nis the directory structure after creating a project with the name ",(0,l.kt)("inlineCode",{parentName:"p"},"ModExperiment"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\n\u2514\u2500\u2500 ModExperiment\n    \u251c\u2500\u2500 ModExperiment\n    \u2502\xa0\xa0 \u251c\u2500\u2500 ModExperiment.csproj\n    \u2502\xa0\xa0 \u2514\u2500\u2500 TemplatePlugin.cs\n    \u2514\u2500\u2500 ModExperiment.sln\n")),(0,l.kt)("h2",{id:"setup-among-us-environment-variable"},"Setup Among Us environment variable"),(0,l.kt)("p",null,"Finally, we need to set up an environment variable which points to your modded Among Us Directory.\nThis is the folder in which BepInEx was installed earlier."),(0,l.kt)("p",null,"On Windows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Search ",(0,l.kt)("inlineCode",{parentName:"p"},"system environment variables")," from the search button in the taskbar. Click the\nresult in the image below."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"win_envvar_step1",src:n(9997).Z}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The window that will open is shown below. Click the advanced tab at the top, and click the\n",(0,l.kt)("inlineCode",{parentName:"p"},"Environment Variables...")," button."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"win_envvar_step2",src:n(5636).Z}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Environment Variables...")," button should open the window pictured below. Click the ",(0,l.kt)("inlineCode",{parentName:"p"},"New"),"\nbutton under ",(0,l.kt)("inlineCode",{parentName:"p"},"System Variables"),". "),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"win_envvar_step3",src:n(5555).Z}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Name the variable ",(0,l.kt)("inlineCode",{parentName:"p"},"AmongUs"),", and path to be the path to your\nAmong Us installation. After you click save, it should look like this."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"win_envvar_step3",src:n(604).Z})))),(0,l.kt)("p",null,"On Linux, there are many options. Here are two different ways:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open the file ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/environment")," and add ",(0,l.kt)("inlineCode",{parentName:"li"},"AmongUs=/path/to/among/us")," to the file."),(0,l.kt)("li",{parentName:"ol"},"Create a new file under ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/profile.d/"),", and name it ",(0,l.kt)("inlineCode",{parentName:"li"},"amongus-oxygenfilter.sh"),". Add the\nfollowing snippet to this file.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"export AmongUs=/path/to/among/us\n")))))}s.isMDXComponent=!0},6983:function(e,t,n){"use strict";t.Z=n.p+"assets/images/dotnetdownload-dce326f6b07adf422e5de056bd75b66c.png"},9997:function(e,t,n){"use strict";t.Z=n.p+"assets/images/winenvvar1-6138ce2ac02c5319c7cfad0d5a67df10.png"},5636:function(e,t,n){"use strict";t.Z=n.p+"assets/images/winenvvar2-115d9b8d843788c9e2a254020a1256c5.png"},5555:function(e,t,n){"use strict";t.Z=n.p+"assets/images/winenvvar3-77cf7def57214fc20fbdfb7c13fd5617.png"},604:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);
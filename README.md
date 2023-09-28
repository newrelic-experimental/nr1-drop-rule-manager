[![New Relic Experimental header](https://github.com/newrelic/opensource-website/raw/master/src/images/categories/Archived.png)](https://opensource.newrelic.com/oss-category/#new-relic-archived)

# Archival Notice
❗Notice: This project has been archived _as is_ and is no longer actively maintained.

New Relic has released an updated another project nr-drop-rule-explorer: [[https://github.com/newrelic/nr-entity-tag-sync](https://github.com/newrelic-experimental/nr1-drop-rule-explorer)](https://github.com/newrelic-experimental/nr1-drop-rule-explorer). This is an active experimental project. 

Thank-you for those that used the drop rule manager, provided feedback and were patient as we slowly updated it. 

# New Relic Data Drop Rule Manager
![GitHub forks](https://img.shields.io/github/forks/newrelic-experimental/nr1-drop-rule-manager?style=social)
![GitHub stars](https://img.shields.io/github/stars/newrelic-experimental/nr1-drop-rule-manager?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/newrelic-experimental/nr1-drop-rule-manager?style=social)

![GitHub all releases](https://img.shields.io/github/downloads/newrelic-experimental/nr1-drop-rule-manager/total)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/newrelic-experimental/nr1-drop-rule-manager)
![GitHub last commit](https://img.shields.io/github/last-commit/newrelic-experimental/nr1-drop-rule-manager)
![GitHub Release Date](https://img.shields.io/github/release-date/newrelic-experimental/nr1-drop-rule-manager)


![GitHub issues](https://img.shields.io/github/issues/newrelic-experimental/nr1-drop-rule-manager)
![GitHub issues closed](https://img.shields.io/github/issues-closed/newrelic-experimental/nr1-drop-rule-manager)
![GitHub pull requests](https://img.shields.io/github/issues-pr/newrelic-experimental/nr1-drop-rule-manager)
![GitHub pull requests closed](https://img.shields.io/github/issues-pr-closed/newrelic-experimental/nr1-drop-rule-manager)

This application allows you to view, create, delete New Relic data drop rules. With drop rules you can:

- Manage your data ingest  
- Filter out unimportant low-value data  
- Filter out potentially sensitive data  

Use the following link to read the full documentation on drop rules:  
https://docs.newrelic.com/docs/data-apis/manage-data/drop-data-using-nerdgraph/

<br/>

![Screenshot](https://drive.google.com/uc?id=1N8llZIEIEuvXIQMrd4u-V3ez4KIw87oR)

## Run Locally

**Note that when running locally you will only be able to access accounts that the api key stored in your CLI profile allows you to access.**

Clone repo then:
```bash
cd nr1-drop-rule-manager
npm install
nr1 nerdpack:uuid -gf
npm start

Visit the onenr.io URL in the console output under Launchers: drop-rule-manager-launcher
```

## Deploy to a New Relic account

Open a command prompt in the nerdpack's directory and run the following commands.

```bash
nr1 nerdpack:publish
nr1 subscription:set
```

## Undeploy

```bash
nr1 subscription:unset
nr1 nerdpack:undeploy
```

## Support

New Relic has open-sourced this project. This project is provided AS-IS WITHOUT WARRANTY OR DEDICATED SUPPORT. Issues and contributions should be reported to the project here on GitHub.

>We encourage you to bring your experiences and questions to the [Explorers Hub](https://discuss.newrelic.com) where our community members collaborate on solutions and new ideas.


## Contributing

We encourage your contributions to improve [Project Name]! Keep in mind when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. You only have to sign the CLA one time per project. If you have any questions, or to execute our corporate CLA, required if your contribution is on behalf of a company, please drop us an email at opensource@newrelic.com.

**A note about vulnerabilities**

As noted in our [security policy](../../security/policy), New Relic is committed to the privacy and security of our customers and their data. We believe that providing coordinated disclosure by security researchers and engaging with the security community are important means to achieve our security goals.

If you believe you have found a security vulnerability in this project or any of New Relic's products or websites, we welcome and greatly appreciate you reporting it to New Relic through [HackerOne](https://hackerone.com/newrelic).

## License

Drop Rule Manager is licensed under the [Apache 2.0](http://apache.org/licenses/LICENSE-2.0.txt) License.

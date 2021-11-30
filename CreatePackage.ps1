Remove-Item .\JiraTooltip-ChromeExtension.Zip

Compress-Archive -Path .\*.html, .\*.js, .\*.gif, .\*.json, .\*icon.png, .\promotional.png, .\*screenshot.png -CompressionLevel Optimal -DestinationPath .\JiraTooltip-ChromeExtension.Zip
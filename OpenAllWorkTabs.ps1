$urls = @('https://app.slack.com/client/','https://pieshares.atlassian.net/','https://stackoverflow.com/users/8628497/karimov')

foreach($url in $urls){
    Start-Process $url
}
# deploy
cd /opt/atlassian/pipelines/agent/build/dist
aws s3 rm s3://$BOILERPLATE_CLIENT_BUCKET --recursive
aws s3 sync . s3://$BOILERPLATE_CLIENT_BUCKET --acl public-read
aws cloudfront create-invalidation --distribution-id $BOILERPLATE_CLIENT_DISTRIBUTION --paths /\*

#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { TsRestApiStack } from '../lib/ts-rest-api-stack';

const app = new cdk.App();
new TsRestApiStack(app, 'TsRestApiStack', {});

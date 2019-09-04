import { EVENT_TYPES } from 'ddk.registry/dist/model/transport/event';

import { ON_APPLY_TRANSACTION, ON_APPLY_BLOCK } from 'src/config';
import { WebhookAction, WebhookService } from 'src/service/webhook';

export const configureWebhooks = (webhookService: WebhookService<any>): WebhookService<any> => {
    if (ON_APPLY_TRANSACTION) {
        ON_APPLY_TRANSACTION.split(',').forEach(url => {
            webhookService.subscribe(WebhookAction.APPLY_TRANSACTION, url);
            console.log(`[Configurator][Webhook]: ON_APPLY_TRANSACTION: ${url}`);
        });
    }

    if (ON_APPLY_BLOCK) {
        ON_APPLY_BLOCK.split(',').forEach(url => {
            webhookService.subscribe(EVENT_TYPES.APPLY_BLOCK, url);
            console.log(`[Configurator][Webhook]: ON_APPLY_BLOCK: ${url}`);
        });
    }

    return webhookService;
};

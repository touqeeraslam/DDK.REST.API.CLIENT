import { Request, Response } from 'express';
import { API_ACTION_TYPES } from 'ddk.registry/dist/model/transport/code';

import { validate } from 'src/util/validate';
import { socketClient } from 'src/service/socket';

export class AccountController {
    @validate
    async get(req: Request, res: Response): Promise<Response> {
        const response = await socketClient.send(
            API_ACTION_TYPES.GET_ACCOUNT,
            req.params,
        );

        return res.send(response);
    }

    @validate
    async getBalance(req: Request, res: Response): Promise<Response> {
        const response = await socketClient.send(
            API_ACTION_TYPES.GET_ACCOUNT_BALANCE,
            req.params,
        );

        return res.send(response);
    }
}

export const accountController = new AccountController();
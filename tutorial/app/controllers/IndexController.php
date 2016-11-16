<?php

use Phalcon\Mvc\Controller;

class PostsController extends Controller
{
    public function initialize()
    {
        $this->view->setTemplateAfter("login");
    }

    public function indexAction()
    {
        $this->flash->notice(
            "These are the latest posts"
        );
    }
}
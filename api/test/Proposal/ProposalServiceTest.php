<?php

namespace Test\ProposiDocs\Proposal;

use PHPUnit\Framework\Assert;
use PHPUnit\Framework\TestCase;
use ProposiDocs\Proposal\Entity\ProposalEntity;
use ProposiDocs\Proposal\ProposalService;

class ProposalServiceTest extends TestCase {

	public function testCreate(): void {
		$title = 'My proposal title';
		$description = 'My proposal description';
		$price = '$ 100';

		$instance = self::createProposal($title, $description, $price);

		Assert::assertEquals($title, $instance->getTitle());
		Assert::assertEquals($description, $instance->getDescription());
		Assert::assertEquals($price, $instance->getPrice());
	}

	public function testGet(): void {
		$title = 'My proposal title';
		$description = 'My proposal description';
		$price = '$ 100';

		$instance = self::createProposal($title, $description, $price);

		$proposal = ProposalService::getProposal($instance->getId());

		Assert::assertEquals($title, $proposal->getTitle());
		Assert::assertEquals($description, $proposal->getDescription());
		Assert::assertEquals($price, $proposal->getPrice());
	}

	private static function createProposal(string $title, string $description, string $price): ProposalEntity {
		$obj = new ProposalEntity($title, $description, $price);
		return ProposalService::create($obj);
	}
}
